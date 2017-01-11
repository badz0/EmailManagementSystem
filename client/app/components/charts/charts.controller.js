class ChartsController {
<<<<<<< HEAD
  constructor(Firedbservice, columnChartService, lineChartService, multipleChartService, pieChartService, globalHardcodeConfigFactory) {'ngInject';
    const configData = globalHardcodeConfigFactory;
    this.currentNavItem = configData.currentNavItem;
    this.elemsStatus = configData.tags;
    this.btnConfigs = configData;
  };
  previousItem() {
    this.currentNavItem === 0 ? this.currentNavItem = this.elemsStatus.length : this.currentNavItem -= 1;
  };
  nextItem() {
    this.currentNavItem >= this.elemsStatus.length - 1 ? this.currentNavItem = 0 : this.currentNavItem += 1;
=======
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
>>>>>>> lv_ems_214_dragable
  };
}

export default ChartsController;
