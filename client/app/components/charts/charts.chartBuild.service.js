// class ChartService {
//   constructor($log, ChartsFirebaseDataService, GlobalHardcodeConfigService) {'ngInject';
//     this.firedata = ChartsFirebaseDataService;
//     this.codeConig = GlobalHardcodeConfigService.configData();
//   };

//   chartServiceData() {
//     this.firedata.chartsDataBuild().then((res) => {
//       this.groupData(res.groupData);
//       this.signUpDay(res.signUpDay);
//       this.emailsMaxLine(res.emailsMaxLine);
//       this.signUpChart(res.singnUpTimes);
//       this.dateEmailStat(res.dateEmailStat);
//       this.multipleDataComapare(res.multipleDataComapare);
//     });
//   };

//   groupData(res) {
//     let groupDataConfig = this.codeConig.groupData;
//     groupDataConfig.dataProvider = res;
//     AmCharts.makeChart('groupDataChart', groupDataConfig);
//   };

//   multipleDataComapare(res) {
//     let multipleConfig = this.codeConig.multipleDataComapare;
//     multipleConfig.dataProvider = res;
//     AmCharts.makeChart('multiple', multipleConfig);
//   };

//   signUpDay(res) {
//     let signUpDayConfig = this.codeConig.signUpDay;
//     signUpDayConfig.dataProvider = res;
//     AmCharts.makeChart('signUpDayChart', signUpDayConfig);
//   };

//   emailsMaxLine(res) {
//     let emailsMaxLineData = this.codeConig.emailsMaxLine;
//     emailsMaxLineData.dataProvider = res;
//     AmCharts.makeChart('emailsMaxChart', emailsMaxLineData);
//   };

//   signUpChart(res) {
//     let chartsActive = this.codeConig.chartsActive;
//     chartsActive.dataProvider = res;
//     AmCharts.makeChart('chartsActive', chartsActive);
//   };

//   dateEmailStat(res) {
//     let dateEmailStat = this.codeConig.emailDateSat;
//     dateEmailStat.dataProvider = res;
//     AmCharts.makeChart('dateEmailStat', dateEmailStat);
//   };
// };

// export default ChartService;
