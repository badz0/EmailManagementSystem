import template from './switcher.html';
import controller from './switcher.controller';
import './switcher.scss';

let switcherComponent = {
  bindings: {
    onStateChange: '&'
  },
  template,
  controller 
};

export default switcherComponent;
