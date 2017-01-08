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
};

export default chartService;


// function chartService($log, chartsFirebaseDataFactory, globalHardcodeConfigFactory) {'ngInject';
//   return  {
//     pieChart      : pieChart,
//     multipleChart : multipleChart,
//     columnChart   : columnChart,
//     lineChart     : lineChart
//   };
//   function pieChart() {
//     chartsFirebaseDataFactory.pieFireData().then((res) => {
//       let pieConfig = globalHardcodeConfigFactory.pie;
//       pieConfig.dataProvider = res;
//       AmCharts.makeChart('piechart', pieConfig);
//     });
//   };
//   function multipleChart() {
//     chartsFirebaseDataFactory.multyFireData().then((res) => {
//       let multipleConfig = globalHardcodeConfigFactory.multiple;
//       multipleConfig.dataProvider = res;
//       AmCharts.makeChart('multiple', multipleConfig);
//     });
//   };
//   function columnChart() {
//     chartsFirebaseDataFactory.columnFireData().then((res) => {
//       let columnConfig = globalHardcodeConfigFactory.columnChart;
//       columnConfig.dataProvider = res;
//       AmCharts.makeChart('columnchart', columnConfig);
//     });
//   };
//   function lineChart() {
//     chartsFirebaseDataFactory.lineFireData().then((res) => {
//       let lineData = globalHardcodeConfigFactory.lineChart;
//       lineData.dataProvider = res;
//       AmCharts.makeChart('linechart', lineData);
//     });
//   };
// };

// export default chartService;
