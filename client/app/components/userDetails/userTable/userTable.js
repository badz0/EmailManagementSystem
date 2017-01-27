import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userTableComponent from './userTable.component';
import ngMessages from 'angular-messages';


let userTableModule = angular.module('userTable', [
  uiRouter,
      
])


.component('userTable', userTableComponent)

.name;

export default userTableModule;