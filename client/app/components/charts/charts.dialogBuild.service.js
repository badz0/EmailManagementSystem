class dialogDataService {
  constructor(chartsFirebaseDataFactory, globalHardcodeConfigFactory) {'ngInject';
    this.chartsFirebaseDataFactory = chartsFirebaseDataFactory;
    this.globalHardcodeConfigFactory = globalHardcodeConfigFactory.configData();
  };

  dialogDataServiceData(index) {
    this.chartsFirebaseDataFactory.chartsDataBuild().then((res) => {
      this.dialogGroupCharts(index, res.firedbChartData);
      this.dialogDateCharts(index, res.firedbChartData);
      this.dialogActivityCharts(index, res.firedbChartData);
    });
  };

  dialogGroupCharts(index, res) {
    let dialogGroup = this.globalHardcodeConfigFactory.dialogGroupStat;
    dialogGroup.dataProvider = this.chartsDataProvider(res, index, 'group');
    AmCharts.makeChart(`chartsData${index}`, dialogGroup);
  };

  dialogDateCharts(index, res) {
    let dialogDate = this.globalHardcodeConfigFactory.dialogEmailDayStat;
    dialogDate.dataProvider = this.chartsDataProvider(res, index, 'date');
    AmCharts.makeChart(`charts${index}`, dialogDate);
  };

  dialogActivityCharts(index, res) {
    let chartsActive = this.globalHardcodeConfigFactory.dialogRecepientChart;
    chartsActive.dataProvider = this.chartSortMaxDataProvider(res, index, 'recipient');;
    AmCharts.makeChart(`chartsActive${index}`, chartsActive);
  };

  searchEmailsData(res) {
    return res.user.map((val) => {
      return {'letters': val.listOfEmails};
    });
  };

  searchUnicData(res, index , key) {
    let arr = [];
    this.searchEmailsData(res)[index].letters.map((val, i) => {
      if (arr.indexOf(val[key]) === -1) {
        arr.push(val[key]);
      };
    });
    return arr;
  };

  chartsDataProvider(res, index, searchElem) {
    return this.searchUnicData(res, index , searchElem).map((val) => {
      let integer = 0;
      this.searchEmailsData(res)[index].letters.map((inElemVal) => {
        if(val === inElemVal[searchElem]) {
          integer += 1;
        };
      });
      return {[searchElem]: val, value: integer};
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

export default dialogDataService;
