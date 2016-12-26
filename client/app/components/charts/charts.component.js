import template from './charts.template.html';
import controller from './charts.controller';
import './charts.scss';

const ChartsComponent = {
  template,
  controller() {
    this.$onInit = function () {
      this.elemsStatus = [
        {name: 'All letters by date', status: true},
        {name: 'Sorted by Groups', status: true},
        {name: 'Sorted by Categoty', status: false}
      ]; 
    };
    this.hideElem = (index) => {
      this.elemsStatus.forEach(val => {
        val.status = true;
      });
      this.elemsStatus[index].status = false;
    };
  }
};

export default ChartsComponent;
