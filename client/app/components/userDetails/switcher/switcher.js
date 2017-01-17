import angular from 'angular';
import uiRouter from 'angular-ui-router';
import switcherComponent from './switcher.component';

let switcherModule = angular.module('switcher', [])

.component('switcher', switcherComponent)

.name;

export default switcherModule;
