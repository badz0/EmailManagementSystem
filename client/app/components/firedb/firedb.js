import angular from 'angular';
import uiRouter from 'angular-ui-router';
import firedbComponent from './firedb.component';

let firedbModule = angular.module('firedb', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('firedb', {
      url: '/firedb',
      component: 'firedb'
    });
})

.component('firedb', firedbComponent)
.name;

export default firedbModule;
