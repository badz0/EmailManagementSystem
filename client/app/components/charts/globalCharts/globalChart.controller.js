class GlobalChartController {
  constructor (Firedbservice, ChartsFirebaseDataService, dragularService, $element, $mdDialog, ChartService, DialogDataService, GlobalHardcodeConfigService) {'ngInject';
    dragularService('.containerVertical', { removeOnSpill: true });
    this.chartService = ChartService;
    this.configData = GlobalHardcodeConfigService.configData();
  };
  previousItem() {
    this.configData.currentNavItem === 0 ? this.configData.currentNavItem = this.configData.tags.length : this.configData.currentNavItem -= 1;
  };
  nextItem() {
    this.configData.currentNavItem >= this.configData.tags.length - 1 ? this.configData.currentNavItem = 0 : this.configData.currentNavItem += 1;
  };
};

export default GlobalChartController;
