class GlobalChartController {
  constructor (Firedbservice, ChartsFirebaseDataService, GlobalHardcodeConfigService, $translate) {'ngInject';
    this.firedata = ChartsFirebaseDataService;
    this.translate = $translate;
    this.configData = GlobalHardcodeConfigService.configData();
    this.firedata.chartsDataBuild().then((res) => {
      this.color = res.userCabinetColor;
    });
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
      AmCharts.makeChart('signUpDayChart', this.configData.chartsData.signUpDay);
      AmCharts.makeChart('emailsMaxChart', this.configData.chartsData.emailsMaxLine);
      AmCharts.makeChart('chartsActive', this.configData.chartsData.singnUpTimes);
      AmCharts.makeChart('dateEmailStat', this.configData.chartsData.emailDateStat);
    });
  };
};

export default GlobalChartController;
