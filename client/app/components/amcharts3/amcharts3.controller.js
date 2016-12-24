class Amcharts3Controller {
  constructor() {
  	const vm = this;
    vm.name = 'All user`s received email statistics';
    vm.elemsStatus = [
      {name: 'All letters', status: true},
      {name: 'Groups', status: true},
      {name: 'Categoty', status: false}
    ]; 
  }
  hideElem(index) {
    const vm = this;
    vm.elemsStatus.forEach(val => {
      if(!val.status) val.status = true;
    });
      //vm.elemsStatus[index].status ? vm.elemsStatus[index].status = false : vm.elemsStatus[index].status = true;
      vm.elemsStatus[index].status = false;
    };
}

export default Amcharts3Controller;
