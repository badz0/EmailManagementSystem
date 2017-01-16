import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userTableComponent from './userTable.component';
import ngMessages from 'angular-messages';


let userTableModule = angular.module('userTable', [
  uiRouter,
  'ngMessages',
  'ui.grid',
  'ui.grid.moveColumns',
  'ui.grid.pinning',
  'ui.grid.resizeColumns',
  'ui.grid.selection',
  'ui.grid.exporter'
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('userTable', {
      url: '/userTable',
      component: 'userTable'
    });
})

.component('userTable', userTableComponent)

.name;

export default userTableModule;
