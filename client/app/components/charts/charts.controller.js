import * as firebase from "firebase";

class ChartsController {
  $onInit () {
    const vm = this;
    this.currentNavItem = 0;
    this.elemsStatus = [
      {name: 'Number of letters by date', status: true, value: 0},
      {name: 'Sorted by Groups', status: true, value: 1},
      {name: 'Sorted by Categoty', status: true, value: 2},
      {name: 'Muliple Charts example', status: true, value: 3}
    ];
  };
  hideElem(index) {
    this.elemsStatus.forEach(val => {
      val.status = true;
    });
    this.elemsStatus[index].status = false;
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
