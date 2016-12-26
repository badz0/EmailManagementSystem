class ChartsController {
  constructor() {
    this.$onInit = function () {
      this.elemsStatus = [
        {name: 'All letters by date', status: true},
        {name: 'Sorted by Groups', status: true},
        {name: 'Sorted by Categoty', status: false}
      ]; 
    };
  }
  hideElem(index) {
    this.elemsStatus.forEach(val => {
      val.status = true;
    });
    this.elemsStatus[index].status = false;
  };
}

export default ChartsController;
