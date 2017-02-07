class UserChartController {
  constructor (ChartsFirebaseDataService, dragularService, FiredbAutorisation, $translate, $element, $mdDialog, DialogService, HardcodeConfigService, $scope) {'ngInject';
    this.dragularService = dragularService;
    this.dialog = $mdDialog;
    this.translate = $translate;
    this.DialogService = DialogService;
    this.FiredbAutorisation = FiredbAutorisation;
    this.ChartsFirebaseDataService = ChartsFirebaseDataService;
    this.configData = HardcodeConfigService.configData();
    this.usersList = [];
    this.color = 'red';
  };

  $onInit() {
    this.gridOptions = this.configData.gridData;
    this.defaultConstructBuilder();
    this.getUserData();
    this.dragularService('.containerVertical', { removeOnSpill: true });
  };

  showDialogCharts(index) {
    this.DialogService.dialogServiceData(index)
      .then(response => {
        for (let key in this.configData.dialogChart) {
          this.configData.dialogChart[key].dataProvider = response[key];
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

  getUserData() {
    this.FiredbAutorisation.responseData()
      .then(response => {
        this.userData = response.userData;
      });
  };

  showUIGrid(index) {
    this.user =  this.usersList[index];
    this.user.index = index;
    this.ChartsFirebaseDataService.chartsDataBuild()
      .then(response => {
        this.gridOptions.data = this.user.listOfEmails;
      });
    this.dialog.show({
      contentElement: '#usersListGrid',
      clickOutsideToClose: true
    });
  };

  showUserEmails(index) {
    this.user = this.usersList[index];
    this.dialog.show({
      contentElement: '#usersList',
      clickOutsideToClose: true
    });
  };

  defaultConstructBuilder() {
    this.ChartsFirebaseDataService.chartsDataBuild()
      .then(response => {
        this.usersList = response.firedbChartData.user;
      });
  };
};

export default UserChartController;
