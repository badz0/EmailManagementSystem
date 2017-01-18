import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userDetailsComponent from './userDetails.component';

import switcherComponent from './switcher/switcher.component.js';
import switcherController from './switcher/switcher.controller.js';
import switcherTemplate from './switcher/switcher.html';

import userTableComponent from './userTable/userTable.component.js';
import userTableController from './userTable/userTable.controller.js';
import userTableTemplate from './userTable/userTable.html';


let userDetailsModule = angular.module('userDetails', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('userDetails', {
      url: '/userDetails',
      component: 'userDetails'
    })
    .state('switcher', {
      url: '/switcher',
      component: 'switcher'
    })
    .state('userTable', {
      url: '/userTable',
      component: 'userTable'
    });
})

.component('userDetails', userDetailsComponent)
.component('switcher', switcherComponent)
.component('userTable', userTableComponent)

.name;

export default userDetailsModule;
