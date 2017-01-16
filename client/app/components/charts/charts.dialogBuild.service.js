class DialogDataService {
  constructor(ChartsFirebaseDataService, GlobalHardcodeConfigService) {'ngInject';
    this.ChartsFirebaseDataService = ChartsFirebaseDataService;
    this.GlobalHardcodeConfigService = GlobalHardcodeConfigService.configData();
  };

  dialogDataServiceData(index) {
    return this.ChartsFirebaseDataService.chartsDataBuild().then((res) => {
      return {
        dialogGroupStat: this.chartsDataProvider(res.firedbChartData, index, 'group'),
        dialogEmailDayStat: this.chartsDataProvider(res.firedbChartData, index, 'date'),
        dialogRecepientChart: this.chartSortMaxDataProvider(res.firedbChartData, index, 'recipient')
      };
    });
  }

  searchEmailsData(res) {
    return res.user.map((val) => {
      return {'letters': val.listOfEmails};
    });
  };

  searchUnicData(res, index , key) {
    let arr = [];
    this.searchEmailsData(res)[index].letters.forEach((val, i) => {
      if (arr.indexOf(val[key]) === -1) {
        arr.push(val[key]);
      };
    });
    return arr;
  };

  chartsDataProvider(res, index, searchElem) {
    return this.searchUnicData(res, index , searchElem).map((val) => {
      let count = 0;
      this.searchEmailsData(res)[index].letters.forEach((inElemVal) => {
        if(val === inElemVal[searchElem]) {
          count += 1;
        };
      });
      return {[searchElem]: val, value: count};
    });
  };

  chartSortMaxDataProvider(res, index, searchElem) {
    return this.chartSortRemoveMinData(res, index, searchElem).sort((a, b) => {
      return b.value - a.value;
    });
  };

  chartSortRemoveMinData(res, index, searchElem) {
    return this.chartsDataProvider(res, index, searchElem).filter((val) => {
      if(val.value > 1) return val;
    });
  }
};

export default DialogDataService;
