class ChartsController {
  constructor($location, $window, $log, Firedbservice, chartsFirebaseDataFactory, dragularService, $element, $mdDialog, chartService, dialogDataService, globalHardcodeConfigFactory) {'ngInject';

    dragularService('.containerVertical', { removeOnSpill: true });
    this.dialog = $mdDialog;
    this.chartService = chartService;
    this.dialogDataService = dialogDataService;
    this.viewerChanger = false;
    this.defaultPageShow = false;
    this.usersLists = false;
    chartsFirebaseDataFactory.firedbChartData().then((res) => {
      this.usersList = res.user;
    });
    this.configData = globalHardcodeConfigFactory;
    this.hideChart = function() {
      this.viewerChanger = false;

      AmCharts.clear();

    };
  // window.location = "http://localhost:3000/"
    this.activate();
    this.reloadRoute = function() {
      $window.location.reload();
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
    this.dialogDataService.dialogActivityCharts(index);
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
    this.usersLists = false;
    this.defaultPageShow = false;
    this.chartService.pieChart();
    this.chartService.columnChart();
    this.chartService.multipleChart();
    this.chartService.lineChart();
  };
  winLocation() {
    window.location = 'http://localhost:3000/';
  };
  defShow() {
    this.defaultPageShow ? this.defaultPageShow = false : this.defaultPageShow = true;
    this.hideChart();
    this.usersLists = false;

  };
  useListShow() {
    this.usersLists ? this.usersLists = false : this.usersLists = true;
    this.hideChart();
    this.defaultPageShow = false;
  };

}

export default ChartsController;
