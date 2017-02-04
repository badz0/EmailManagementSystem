class DialogService {
  constructor(ChartsFirebaseDataService, HardcodeConfigService) {'ngInject';
    this.ChartsFirebaseDataService = ChartsFirebaseDataService;
    this.HardcodeConfigService = HardcodeConfigService.configData();
  };

  dialogServiceData(index) {
    return this.ChartsFirebaseDataService.chartsDataBuild().then((response) => {
      return {
        dialogGroupStat: this.chartsDataProvider(response.firedbChartData, index, 'group'),
        dialogEmailDayStat: this.chartsDataProvider(response.firedbChartData, index, 'date'),
        dialogRecepientChart: this.chartSortMaxDataProvider(response.firedbChartData, index, 'recipient')
      };
    });
  }

  searchEmailsData(response) {
    return response.user.map((user) => {
      return {'letters': user.listOfEmails};
    });
  };

  searchUnicData(response, index , key) {
    let arr = [];
    this.searchEmailsData(response)[index].letters.forEach((letter, i) => {
      if (arr.indexOf(letter[key]) === -1) {
        arr.push(letter[key]);
      };
    });
    return arr;
  };

  chartsDataProvider(response, index, searchElem) {
    return this.searchUnicData(response, index , searchElem).map(unicElem => {
      let count = 0;
      this.searchEmailsData(response)[index].letters.forEach(inElemVal => {
        if(unicElem === inElemVal[searchElem]) {
          count += 1;
        };
      });
      return {[searchElem]: unicElem, value: count};
    });
  };

  chartSortMaxDataProvider(response, index, searchElem) {
    return this.chartSortRemoveMinData(response, index, searchElem).sort((a, b) => {
      return b.value - a.value;
    });
  };

  chartSortRemoveMinData(response, index, searchElem) {
    return this.chartsDataProvider(response, index, searchElem).filter(letters => {
      if(letters.value > 1) return letters;
    });
  };
};

export default DialogService;
