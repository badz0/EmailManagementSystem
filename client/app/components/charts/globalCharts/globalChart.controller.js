class GlobalChartController {
  constructor (ChartsFirebaseDataService, GlobalHardcodeConfigService, FiredbAutorisation, $translate) {'ngInject';
    this.ChartsFirebaseDataService = ChartsFirebaseDataService;
    this.FiredbAutorisation = FiredbAutorisation;
    this.translate = $translate;
    this.configData = GlobalHardcodeConfigService.configData();
  };

  $onInit() {
    this.getUserData();
  };

  $onDestroy() {
    this.destroyCharts();
  };

  previousItem() {
    this.configData.currentNavItem = this.configData.currentNavItem === 0 ? this.configData.tags.length : this.configData.currentNavItem -= 1;
  };

  nextItem() {
    this.configData.currentNavItem = this.configData.currentNavItem >= this.configData.tags.length - 1 ?  0 : this.configData.currentNavItem += 1;
  };

  getUserData() {
    this.ChartsFirebaseDataService.chartsDataBuild().then(res => {
      this.color = res.userCabinetColor;
    });
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
  };

  destroyCharts() {
    this.configData.navBarDisplay.globalChartsStats = false;
    AmCharts.clear();
    return !!AmCharts.isReady;
  };

  chartServiceData() {
    if(this.configData.navBarDisplay.globalChartsStats) {
      this.configData.navBarDisplay.globalChartsStats = false;
      AmCharts.clear();
      return !!AmCharts.isReady;
    }
    this.configData.navBarDisplay.globalChartsStats = true;
    this.ChartsFirebaseDataService.chartsDataBuild().then(res => {
      for (let key in this.configData.chartsData) {
        this.configData.chartsData[key].dataProvider = res[key];
      };
      AmCharts.makeChart('groupDataChart', this.configData.chartsData.groupData);
      AmCharts.makeChart('multiple', this.configData.chartsData.multipleUserComapare);
      AmCharts.makeChart('userDateStat', this.configData.chartsData.userEmailDateComapare);
      AmCharts.makeChart('emailsMaxChart', this.configData.chartsData.emailsMaxLine);
      AmCharts.makeChart('chartsActive', this.configData.chartsData.singnUpTimes);
      AmCharts.makeChart('dateEmailStat', this.configData.chartsData.emailDateStat);
      return !!AmCharts.isReady;
    });

  };
};

export default GlobalChartController;


