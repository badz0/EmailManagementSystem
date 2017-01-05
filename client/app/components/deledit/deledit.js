import angular from 'angular';
import uiRouter from 'angular-ui-router';
import deleditComponent from './deledit.component';
import angularmaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import angularAria from 'angular-aria';
import 'angular-material/angular-material.css';

let deleditModule = angular.module('deledit', [
  uiRouter,
    angularmaterial,
    angularAnimate,
    angularSanitize,
    angularAria
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('deledit', {
      url: '/deledit',
      component: 'deledit'
    });
})

.component('deledit', deleditComponent)
  
.name;

export default deleditModule;