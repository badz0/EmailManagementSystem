class chartService {
  constructor($log, chartsFirebaseDataFactory, globalHardcodeConfigFactory) {'ngInject';
    this.firedata = chartsFirebaseDataFactory;
    this.codeConig = globalHardcodeConfigFactory.configData();
  };

  chartServiceData() {
    this.firedata.chartsDataBuild().then((res) => {
      this.pieChart(res.pieFireData);
      this.columnChart(res.columnFireData);
      this.lineChart(res.lineFireData);
      this.signUpChart(res.singnUpTimes);
      this.dateEmailStat(res.dateEmailStat);
      this.multipleChart(res.multyFireData);
    });
  };

  pieChart(res) {
    let pieConfig = this.codeConig.pie;
    pieConfig.dataProvider = res;
    AmCharts.makeChart('piechart', pieConfig);
  };

  multipleChart(res) {
    let multipleConfig = this.codeConig.multiple;
    multipleConfig.dataProvider = res;
    AmCharts.makeChart('multiple', multipleConfig);
  };

  columnChart(res) {
    let columnConfig = this.codeConig.columnChart;
    columnConfig.dataProvider = res;
    AmCharts.makeChart('columnchart', columnConfig);
  };

  lineChart(res) {
    let lineData = this.codeConig.lineChart;
    lineData.dataProvider = res;
    AmCharts.makeChart('linechart', lineData);
  };

  signUpChart(res) {
    let chartsActive = this.codeConig.chartsActive;
    chartsActive.dataProvider = res;
    AmCharts.makeChart('chartsActive', chartsActive);
  };

  dateEmailStat(res) {
    let dateEmailStat = this.codeConig.emailDateSat;
    dateEmailStat.dataProvider = res;
    AmCharts.makeChart('dateEmailStat', dateEmailStat);
  };
};

export default chartService;
