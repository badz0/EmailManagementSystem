import template from './emailDetail.html';
import controller from './emailDetail.controller';
import './emailDetail.scss';

let heroComponent = {
  bindings: {
    email: '<'
  },
  template,
  controller
};

export default heroComponent;
