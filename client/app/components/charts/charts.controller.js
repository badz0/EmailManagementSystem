import * as firebase from "firebase";

class ChartsController {
  constructor(columnChartService, lineChartService, multipleChartService, pieChartService, chartsFactory) {'ngInject';
    this.currentNavItem = chartsFactory.currentNavItem();
    this.elemsStatus = chartsFactory.elemsStatus();
  };
  priviousItem() {
    if(this.currentNavItem === 0) this.currentNavItem = this.elemsStatus.length;
    this.currentNavItem -= 1;
  };
  nextItem() {
    if(this.currentNavItem >= this.elemsStatus.length - 1) this.currentNavItem = 0;
    else this.currentNavItem += 1;
  };
}

export default ChartsController;
