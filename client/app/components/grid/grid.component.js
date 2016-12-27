import template from './grid.html';
import controller from './grid.controller';
import './grid.scss';

let gridComponent = {
  bindings: {
    grid: '<' ,
  },
  template,
  controller
};

export default gridComponent;
