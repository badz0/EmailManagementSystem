class LineChartController {
  constructor (Firedbservice, ChartsFirebaseDataService, dragularService, $element, $mdDialog, ChartService, DialogDataService, GlobalHardcodeConfigService) {'ngInject';
    dragularService('.containerVertical', { removeOnSpill: true });
    this.dialog = $mdDialog;
    this.chartService = ChartService;
    this.dialogDataService = DialogDataService;

    ChartsFirebaseDataService.chartsDataBuild().then((res) => {
      this.usersList = res.firedbChartData.user;
    });

    this.configData = GlobalHardcodeConfigService.configData();
  };
  showDialogCharts(index) {
    this.dialogDataService.dialogDataServiceData(index);
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
