import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userTableComponent from './userTable.component';
import ngMessages from 'angular-messages';

import exportTableComponent from './exportTable/exportTable.component';


let userTableModule = angular.module('userTable', [
  uiRouter,
      
])

.component('userTable', userTableComponent)
.component('exportTable', exportTableComponent)

.name;

export default userTableModule;
