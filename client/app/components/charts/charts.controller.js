import * as firebase from 'firebase';

class ChartsController {
  constructor(columnChartService, lineChartService, multipleChartService, pieChartService, globalHardcodeConfigFactory) {'ngInject';
    const configData = globalHardcodeConfigFactory.chartConfigs();
    this.currentNavItem = configData.currentNavItem;
    this.elemsStatus = configData.tags;
    this.btnConfigs = configData;
  };
  previousItem() {
    if(this.currentNavItem === 0) this.currentNavItem = this.elemsStatus.length;
    this.currentNavItem -= 1;
  };
  nextItem() {
    if(this.currentNavItem >= this.elemsStatus.length - 1) this.currentNavItem = 0;
    else this.currentNavItem += 1;
  };
}

export default ChartsController;
