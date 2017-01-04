class ChartsController {
  constructor($log, chartsFirebaseDataFactory, dragularService, $element, $mdDialog, columnChartService, lineChartService, multipleChartService, pieChartService, globalHardcodeConfigFactory) {'ngInject';
    chartsFirebaseDataFactory.allUser().then((res) => {
      this.usersList = res;
       $log.log(res)
    }).catch((e) => {
      $log.log(e)
    });;
    chartsFirebaseDataFactory.allUser().then((res) => {
      this.pie = [];
      res.forEach((val) => {
        this.pie.push({'provider': val.name, 'letters': val.listOfEmails.length});
      });
      $log.log("All Column Chart", this.pie);
    }).catch((e) => {
      $log.log(e)
    });
    dragularService('.containerVertical');
    const configData = globalHardcodeConfigFactory;
    this.currentNavItem = configData.currentNavItem;
    this.elemsStatus = configData.tags;
    this.btnConfigs = configData;
    this.showPrerenderedDialog = function(index) {
  AmCharts.makeChart(`chartsData${index}`, {
      'type': 'serial',
      'theme': 'dark',
      'dataProvider': this.pie,
      'valueAxes': [ {
        'gridColor': '#000000',
        'dashLength': 0
      } ],
      'gridAboveGraphs': true,
      'startDuration': 0,
      'graphs': [ {
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'type': 'column',
        'valueField': 'letters'
      } ],
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'provider',
      'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0,
        'tickPosition': 'start',
        'tickLength': 20
      }
    });
    $mdDialog.show({
      contentElement: `#di${index}`,
      clickOutsideToClose: true
    });
  };
    this.al = function(user) {
      this.user =  this.usersList[user].login;
      this.listOfEmails = this.usersList[user].listOfEmails;
      console.log(this.usersList[user].listOfEmails);
      $mdDialog.show({
        contentElement: `#usersList`,
        clickOutsideToClose: true
      });
    };
  };
  previousItem() {
    this.currentNavItem === 0 ? this.currentNavItem = this.elemsStatus.length : this.currentNavItem -= 1;
  };
  nextItem() {
    this.currentNavItem >= this.elemsStatus.length - 1 ? this.currentNavItem = 0 : this.currentNavItem += 1;
  };

}

export default ChartsController;
