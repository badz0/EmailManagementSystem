import template from './emailDetail.html';
import controller from './emailDetail.controller';
import './emailDetail.scss';

let heroComponent = {
  restrict: 'E',
  bindings: {
    email: '<' 
  },
  template,
  controller
};

export default heroComponent;
