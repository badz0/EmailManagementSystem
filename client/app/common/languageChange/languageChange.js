import angular from 'angular';
import uiRouter from 'angular-ui-router';
import languageChangeComponent from './languageChange.component';

let languageChangeModule = angular.module('languageChange', [
  uiRouter
])

.component('languageChange', languageChangeComponent)

.name;

export default languageChangeModule;
