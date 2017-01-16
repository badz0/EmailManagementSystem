import template from './switcher.html';
import controller from './switcher.controller';
import './switcher.scss';

let switcherComponent = {
  require:{
    controller:'^^userDetails'
  },
  bindings: {
    state: '<',
    onStateChange: '&'
  },
  template,
  controller 
};

export default switcherComponent;
