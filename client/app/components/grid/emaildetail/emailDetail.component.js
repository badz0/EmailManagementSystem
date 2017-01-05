import template from './emailDetail.html';
import controller from './emailDetail.controller';
import './emailDetail.scss';

let gridComponent = {
  bindings: {
    currentData: '<'
  },
  template,
  controller
};

export default gridComponent;
