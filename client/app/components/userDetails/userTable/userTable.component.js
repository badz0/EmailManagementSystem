import template from './userTable.html';
import controller from './userTable.controller';
import './userTable.scss';

let userTableComponent = {
  bindings: {
    state: '<'
  
  },
  template,
  controller
};

export default userTableComponent;
