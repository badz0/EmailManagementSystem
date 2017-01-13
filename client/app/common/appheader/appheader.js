import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appheaderComponent from './appheader.component';

let appheaderModule = angular.module('appheader', [
  uiRouter
])
.component('appheader', appheaderComponent)

.name;

export default appheaderModule;
