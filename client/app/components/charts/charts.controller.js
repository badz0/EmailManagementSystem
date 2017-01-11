class ChartsController {
  constructor(Firedbservice, ChartsFirebaseDataService, dragularService, $element, $mdDialog, ChartService, DialogDataService, GlobalHardcodeConfigService) {'ngInject';
    this.chartService = ChartService;
    this.configData = GlobalHardcodeConfigService.configData();
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
