import * as firebase from 'firebase';

class ChartsController {
  constructor(firebaseData, columnChartService, lineChartService, multipleChartService, pieChartService, globalHardcodeConfigFactory) {'ngInject';
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
  };
}

export default ChartsController;
