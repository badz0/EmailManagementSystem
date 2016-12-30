import angular from 'angular';
import uiRouter from 'angular-ui-router';
import firedbComponent from './firedb.component';
import angularfire from 'angularfire';

let firedbModule = angular.module('firedb', [
  uiRouter,
  angularfire
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
