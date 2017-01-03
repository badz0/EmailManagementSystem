class ChartsController {
  constructor($log, chartsFirebaseDataFactory, dragularService, $element, $mdDialog, columnChartService, lineChartService, multipleChartService, pieChartService, globalHardcodeConfigFactory) {'ngInject';
    chartsFirebaseDataFactory.allUser().then((res) => {
      this.usersList = res;
       $log.log(res)
    });
    dragularService('.containerVertical');
    const configData = globalHardcodeConfigFactory;
    this.currentNavItem = configData.currentNavItem;
    this.elemsStatus = configData.tags;
    this.btnConfigs = configData;
    this.showPrerenderedDialog = function(asd) {
    $mdDialog.show({
      contentElement: `#di${asd}`,
      clickOutsideToClose: true
    });
  };
   this.al = function(t) {
    this.user =  this.usersList[t].login;
    this.listOfEmails = this.usersList[t].listOfEmails;
    console.log(this.usersList[t].listOfEmails);
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
