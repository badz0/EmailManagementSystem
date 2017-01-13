class LineChartController {
  constructor (Firedbservice, ChartsFirebaseDataService, dragularService, $element, $mdDialog, DialogDataService, GlobalHardcodeConfigService) {'ngInject';
    dragularService('.containerVertical', { removeOnSpill: true });
    this.dialog = $mdDialog;
    this.dialogDataService = DialogDataService;
    ChartsFirebaseDataService.chartsDataBuild().then((res) => {
      this.usersList = res.firedbChartData.user;
    });
    this.configData = GlobalHardcodeConfigService.configData();
  };
  showDialogCharts(index) {
    this.dialogDataService.dialogDataServiceData(index).then((res) => {
      for (let key in this.configData.dialogChart) {
        this.configData.dialogChart[key].dataProvider = res[key];
      }
      AmCharts.makeChart(`charts${index}`, this.configData.dialogChart.dialogEmailDayStat);
      AmCharts.makeChart(`chartsData${index}`, this.configData.dialogChart.dialogGroupStat);
      AmCharts.makeChart(`chartsActive${index}`, this.configData.dialogChart.dialogRecepientChart);
    });

    this.dialog.show({
      contentElement: `#chart${index}`,
      clickOutsideToClose: true
    });
  };

  showUserEmails(user) {
    this.user =  this.usersList[user];
    this.dialog.show({
      contentElement: '#usersList',
      clickOutsideToClose: true
    });
  };
};

export default LineChartController;
