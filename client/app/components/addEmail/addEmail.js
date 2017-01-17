import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addEmailComponent from './addEmail.component';
import ValidationService from './validation.service';

let addEmailModule = angular.module('addEmail', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('addEmail', {
      url: '/addEmail',
      component: 'addEmail'
    });
})
.component('addEmail', addEmailComponent)

.service('ValidationService', ValidationService)

.name;

export default addEmailModule;
