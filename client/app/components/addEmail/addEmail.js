import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addEmailComponent from './addEmail.component';
import ValidationService from './validation.service';
import Constants from './addEmail.constants';

let addEmailModule = angular.module('addEmail', [
  uiRouter
])

.component('addEmail', addEmailComponent)
.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('addEmail', {
      url: '/addEmail',
      component: 'addEmail'
    });
})

.service('ValidationService', ValidationService)

.name;

export default addEmailModule;
