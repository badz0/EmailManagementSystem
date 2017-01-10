class dialogDataService {
  constructor(chartsFirebaseDataFactory, globalHardcodeConfigFactory) {'ngInject';
    this.chartsFirebaseDataFactory = chartsFirebaseDataFactory;
    this.globalHardcodeConfigFactory = globalHardcodeConfigFactory;
  };
  dialogGroupCharts(index) {
    this.chartsFirebaseDataFactory.firedbChartData().then((res) => {
      let dialogGroup = this.globalHardcodeConfigFactory.anotherChart;
      dialogGroup.dataProvider = this.chartsDataProvider(res, index, 'group');
      AmCharts.makeChart(`chartsData${index}`, dialogGroup);
    });
  };
  dialogDateCharts(index) {
    this.chartsFirebaseDataFactory.firedbChartData().then((res) => {
      let dialogDate = this.globalHardcodeConfigFactory.someChart;
      dialogDate.dataProvider = this.chartsDataProvider(res, index, 'date');
      AmCharts.makeChart(`charts${index}`, dialogDate);
    });
  };
  dialogActivityCharts(index) {
    this.chartsFirebaseDataFactory.firedbChartData().then((res) => {
      let chartsActive = this.globalHardcodeConfigFactory.chartsActive2;
      chartsActive.dataProvider = this.chartSortMaxDataProvider(res, index, 'recipient');;
      AmCharts.makeChart(`chartsActive${index}`, chartsActive);
    });
  };
  searchEmailsData(data) {
    return data.user.map((val) => {
      return {'letters': val.listOfEmails};
    });
  };
  searchUnicData(data, index , key) {
    let arr = [];
    this.searchEmailsData(data)[index].letters.map((val, i) => {
      if (arr.indexOf(val[key]) === -1) {
        arr.push(val[key]);
      };
    });
    return arr;
  };
  chartsDataProvider(data, index, searchElem) {
    return this.searchUnicData(data, index , searchElem).map((val) => {
      let integer = 0;
      this.searchEmailsData(data)[index].letters.map((inElemVal) => {
        if(val === inElemVal[searchElem]) {
          integer += 1;
        };
      });
      return {[searchElem]: val, value: integer};
    });
  };
  chartSortMaxDataProvider(data, index, searchElem) {
    return this.chartSortRemoveMinData(data, index, searchElem).sort((a, b) => {
      return b.value - a.value;
    });
  };
  chartSortRemoveMinData(data, index, searchElem) {
    return this.chartsDataProvider(data, index, searchElem).filter((val) => {
      if(val.value > 1) return val;
    });
  }
};

export default dialogDataService;
