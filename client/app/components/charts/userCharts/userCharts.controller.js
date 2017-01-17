class UserChartController {
  constructor (Firedbservice, ChartsFirebaseDataService, dragularService, FiredbAutorisation, $translate, $element, $mdDialog, DialogDataService, GlobalHardcodeConfigService) {'ngInject';
    dragularService('.containerVertical', { removeOnSpill: true });
    this.dialog = $mdDialog;
    this.translate = $translate;
    this.dialogDataService = DialogDataService;
    this.FiredbAutorisation = FiredbAutorisation;
    this.ChartsFirebaseDataService = ChartsFirebaseDataService;
    this.configData = GlobalHardcodeConfigService.configData();
  };

  $onInit() {
    this.gridOptions = this.configData.gridData;
    this.defaultConstructBuilder();
    this.firebaseDataAuthentificationserviceinItialize();
  };

  showDialogCharts(index) {
    this.dialogDataService.dialogDataServiceData(index).then(res => {
      for (let key in this.configData.dialogChart) {
        this.configData.dialogChart[key].dataProvider = res[key];
      };
      AmCharts.makeChart(`charts${index}`, this.configData.dialogChart.dialogEmailDayStat);
      AmCharts.makeChart(`chartsData${index}`, this.configData.dialogChart.dialogGroupStat);
      AmCharts.makeChart(`chartsActive${index}`, this.configData.dialogChart.dialogRecepientChart);
    });
    this.dialog.show({
      contentElement: `#chart${index}`,
      clickOutsideToClose: true
    });
  };

  firebaseDataAuthentificationserviceinItialize() {
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
  };

  showUIGrid(user) {
    this.user =  this.usersList[user];
    this.ChartsFirebaseDataService.chartsDataBuild().then(res => {
      this.gridOptions.data = this.user.listOfEmails;
    });
    this.dialog.show({
      contentElement: '#usersListGrid',
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

  defaultConstructBuilder() {
    this.ChartsFirebaseDataService.chartsDataBuild().then(res => {
      this.usersList = res.firedbChartData.user;
      this.color = res.userCabinetColor;
    });
  }
};

export default UserChartController;
