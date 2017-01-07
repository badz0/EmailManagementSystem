class ChartsController {
  constructor($log, Firedbservice, chartsFirebaseDataFactory, dragularService, $element, $mdDialog, chartService, dialogDataService, globalHardcodeConfigFactory) {'ngInject';

    dragularService('.containerVertical', { removeOnSpill: true });
    this.dialog = $mdDialog;
    this.chartService = chartService;
    this.dialogDataService = dialogDataService;
    this.viewerChanger = false;

    chartsFirebaseDataFactory.firebChartData().then((res) => {
      this.usersList = res.user;
    });
    this.configData = globalHardcodeConfigFactory;
    this.hideChart = function() {
    this.viewerChanger = false;

      AmCharts.clear();
  };
  };
  previousItem() {
    this.configData.currentNavItem === 0 ? this.configData.currentNavItem = this.configData.tags.length : this.configData.currentNavItem -= 1;
  };
  nextItem() {
    this.configData.currentNavItem >= this.configData.tags.length - 1 ? this.configData.currentNavItem = 0 : this.configData.currentNavItem += 1;
  };
  showCharts(index) {
    this.dialogDataService.dialogGroupCharts(index);
    this.dialogDataService.dialogDateCharts(index);
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
  activate() {
    this.viewerChanger = true;
    this.chartService.pieChart();
    this.chartService.columnChart();
    this.chartService.multipleChart();
    this.chartService.lineChart();
  };

}

export default ChartsController;
