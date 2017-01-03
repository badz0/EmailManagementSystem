import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cabinetComponent from './cabinet.component';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import angularAria from 'angular-aria';
import ngMessages from 'angular-messages';
import 'angular-material/angular-material.css';

let cabinetModule = angular.module('cabinet', [
  uiRouter,
  ngMaterial,
  angularAnimate,
  angularSanitize,
  angularAria,
  ngMessages
])

.config(($stateProvider,$compileProvider) => {
  "ngInject";
  $stateProvider
    .state('cabinet', {
      url: '/cabinet',
      component: 'cabinet'
    });
  $compileProvider
    .preAssignBindingsEnabled(true);  
})

.component('cabinet', cabinetComponent)
  
.name;

export default cabinetModule;
