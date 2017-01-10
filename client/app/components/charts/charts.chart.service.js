class chartService {
  constructor($log, chartsFirebaseDataFactory, globalHardcodeConfigFactory) {'ngInject';
    this.firedata = chartsFirebaseDataFactory;
    this.codeConig = globalHardcodeConfigFactory;


  };
  pieChart() {
    this.firedata.pieFireData().then((res) => {
      let pieConfig = this.codeConig.pie;
      pieConfig.dataProvider = res;
      AmCharts.makeChart('piechart', pieConfig);
    });
  };
  multipleChart() {
    this.firedata.multyFireData().then((res) => {
      let multipleConfig = this.codeConig.multiple;
      multipleConfig.dataProvider = res;
      AmCharts.makeChart('multiple', multipleConfig);
    });
  };
  columnChart() {
    this.firedata.columnFireData().then((res) => {
      let columnConfig = this.codeConig.columnChart;
      columnConfig.dataProvider = res;
      AmCharts.makeChart('columnchart', columnConfig);
    });
  };
  lineChart() {
    this.firedata.lineFireData().then((res) => {
      let lineData = this.codeConig.lineChart;
      lineData.dataProvider = res;
      AmCharts.makeChart('linechart', lineData);
    });
  };
  signUpChart() {
    this.firedata.singnUpTimes().then((res) => {
      let chartsActive = this.codeConig.chartsActive;
      chartsActive.dataProvider = res;
      AmCharts.makeChart('chartsActive', chartsActive);
    });
  };
  dateEmailStat() {
    this.firedata.dateEmailStat().then((res) => {
      console.log(res);
      let dateEmailStat = this.codeConig.emailDateSat;
      dateEmailStat.dataProvider = res;
      AmCharts.makeChart('dateEmailStat', dateEmailStat);
    });
  };
};

export default chartService;
