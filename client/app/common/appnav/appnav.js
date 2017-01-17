import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appnavComponent from './appnav.component';

let appnavModule = angular.module('appnav', [
  uiRouter
])

.component('appnav', appnavComponent)

.name;

export default appnavModule;
