class ChartsController {
  constructor($log, chartsFirebaseDataFactory, dragularService, $element, $mdDialog, chartService, dialogDataService, globalHardcodeConfigFactory) {'ngInject';

  dragularService('.containerVertical', { removeOnSpill: true });
  chartService.pieChart();
  chartService.columnChart();
  chartService.multipleChart();
  chartService.lineChart();

  this.dialog = $mdDialog;
  this.dialogDataService = dialogDataService;
  chartsFirebaseDataFactory.firebChartData().then((res) => {
       this.usersList = res.user;
  });
  this.configData = globalHardcodeConfigFactory;

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
    this.user =  this.usersList[user].login;
    this.listOfEmails = this.usersList[user].listOfEmails;
    this.dialog.show({
      contentElement: `#usersList`,
      clickOutsideToClose: true
    });
  };
}

export default ChartsController;
