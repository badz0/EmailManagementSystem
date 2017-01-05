function chartService($log, chartsFirebaseDataFactory, globalHardcodeConfigFactory) {'ngInject';
  const chart = {
    pieChart      : pieChart,
    multipleChart : multipleChart,
    columnChart   : columnChart,
    lineChart     : lineChart
  };
  return chart;

  function pieChart() {
    chartsFirebaseDataFactory.pieFireData().then((res) => {
      let pieConfig = globalHardcodeConfigFactory.pie;
      pieConfig.dataProvider = res;
      AmCharts.makeChart('piechart', pieConfig);
    });
  };
  function multipleChart() {
    chartsFirebaseDataFactory.multyFireData().then((res) => {
      let multipleConfig = globalHardcodeConfigFactory.multiple;
      multipleConfig.dataProvider = res;
      AmCharts.makeChart('multiple', multipleConfig)
    });
  };
  function columnChart() {
    chartsFirebaseDataFactory.columnFireData().then((res) => {
      let columnConfig = globalHardcodeConfigFactory.columnChart;
      columnConfig.dataProvider = res;
      AmCharts.makeChart('columnchart', columnConfig);
    });
  };
  function lineChart() {
    chartsFirebaseDataFactory.lineFireData().then((res) => {
        let lineData = globalHardcodeConfigFactory.lineChart;
        lineData.dataProvider = res;
      AmCharts.makeChart('linechart', lineData);
    });
  };
 };

export default chartService;
