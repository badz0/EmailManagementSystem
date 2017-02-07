import template from './exportTable.html';
import controller from './exportTable.controller';
import UserTableController from '../userTable.controller';

let exportTableComponent = {
  bindings: {
    onSetParam: '&'
  },
  template,
  controller
};

export default exportTableComponent;
