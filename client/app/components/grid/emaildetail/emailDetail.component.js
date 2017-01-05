import template from './emailDetail.html';
import controller from './emailDetail.controller';
import './emailDetail.scss';

let gridComponent = {
  bindings: {
    email: '<'
  },
  template,
  controller
};

export default gridComponent;
