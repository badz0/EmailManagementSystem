class ChartsController {
  constructor(Firedbservice, chartsFirebaseDataFactory, dragularService, $element, $mdDialog, chartService, dialogDataService, globalHardcodeConfigFactory) {'ngInject';

    dragularService('.containerVertical', { removeOnSpill: true });
    this.dialog = $mdDialog;
    this.chartService = chartService;
    this.dialogDataService = dialogDataService;

    chartsFirebaseDataFactory.chartsDataBuild().then((res) => {
      this.usersList = res.firedbChartData.user;
    });

    this.configData = globalHardcodeConfigFactory.configData();
  };

  previousItem() {
    this.configData.currentNavItem === 0 ? this.configData.currentNavItem = this.configData.tags.length : this.configData.currentNavItem -= 1;
  };

  nextItem() {
    this.configData.currentNavItem >= this.configData.tags.length - 1 ? this.configData.currentNavItem = 0 : this.configData.currentNavItem += 1;
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

  showChartsGlobalStatistics() {
    this.configData.navBarDisplay.globalChartsStats = true;
    this.chartService.chartServiceData();
  };

  showDefaultChartsPage() {
    this.configData.navBarDisplay.defaultPageShow ? this.configData.navBarDisplay.defaultPageShow = false : this.configData.navBarDisplay.defaultPageShow = true;
    this.hideGlobalChartsPage();
  };

  showUserListPage() {
    this.configData.navBarDisplay.usersLists ? this.configData.navBarDisplay.usersLists = false : this.configData.navBarDisplay.usersLists = true;
    this.hideGlobalChartsPage();
  };

  hideGlobalChartsPage() {
    this.configData.navBarDisplay.globalChartsStats = false;
    AmCharts.clear();
  };
}

export default ChartsController;
