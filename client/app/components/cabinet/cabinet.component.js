import template from './cabinet.html';
import controller from './cabinet.controller';
import './cabinet.scss';
import './cabinet.data.json';
import './cabinet.countries.json';

let cabinetComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs:'cabinet'
};

export default cabinetComponent;
