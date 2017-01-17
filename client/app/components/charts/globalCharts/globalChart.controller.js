class GlobalChartController {
  constructor (Firedbservice, ChartsFirebaseDataService, GlobalHardcodeConfigService, FiredbAutorisation, $translate, AuthService, authManager) {'ngInject';
    this.firedata = ChartsFirebaseDataService;
    this.FiredbAutorisation = FiredbAutorisation;
    this.translate = $translate;
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    this.FiredbAutorisation = FiredbAutorisation;
    this.configData = GlobalHardcodeConfigService.configData();
    this.firedata.chartsDataBuild().then((res) => {
      this.color = res.userCabinetColor;
    });
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    })
  };
  previousItem() {
    this.configData.currentNavItem = this.configData.currentNavItem === 0 ? this.configData.tags.length : this.configData.currentNavItem -= 1;
  };
  nextItem() {
    this.configData.currentNavItem = this.configData.currentNavItem >= this.configData.tags.length - 1 ?  0 : this.configData.currentNavItem += 1;
  };

  chartServiceData() {
    if(this.configData.navBarDisplay.globalChartsStats) {
      this.configData.navBarDisplay.globalChartsStats = false;
      AmCharts.clear();
      return;
    }
    this.configData.navBarDisplay.globalChartsStats = true;
    this.firedata.chartsDataBuild().then((res) => {
      for (let key in this.configData.chartsData) {
        this.configData.chartsData[key].dataProvider = res[key];
      };
      AmCharts.makeChart('groupDataChart', this.configData.chartsData.groupData);
      AmCharts.makeChart('multiple', this.configData.chartsData.multipleUserComapare);
      AmCharts.makeChart('userDateStat', this.configData.chartsData.userEmailDateComapare);
      AmCharts.makeChart('emailsMaxChart', this.configData.chartsData.emailsMaxLine);
      AmCharts.makeChart('chartsActive', this.configData.chartsData.singnUpTimes);
      AmCharts.makeChart('dateEmailStat', this.configData.chartsData.emailDateStat);
    });
  };
};

export default GlobalChartController;
