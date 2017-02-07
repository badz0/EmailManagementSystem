import angular from 'angular';
import uiRouter from 'angular-ui-router';
import exportTableComponent from './exportTable.component';


let exportTableModule = angular.module('exportTable', [
  uiRouter
])

.component('exportTable', exportTableComponent)


.name;

export default exportTableModule;