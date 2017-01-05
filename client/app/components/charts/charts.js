import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import 'angular-material/angular-material.css';
import chartsComponent from './charts.component';
import globalHardcodeConfigFactory from '../../app.globalHardcodeConfig.js';
import columnChartService from './charts.columnChart.service';
import lineChartService from './charts.lineChart.service';
import multipleChartService from './charts.multipleChart.service';
import pieChartService from  './charts.pieChart.service';
import chartsFirebaseDataFactory from './charts.firebaseData.factory';
import firebaseData from './../../firedb.service.js';

let ChartsModule = angular.module('charts', [
  uiRouter,
  ngMaterial,
  angularAria,
  angularAnimate
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('charts', {
      url: '/charts',
      component: 'charts'
    });
})

.component('charts', chartsComponent)

.factory('globalHardcodeConfigFactory', globalHardcodeConfigFactory)
.factory('chartsFirebaseDataFactory', chartsFirebaseDataFactory)

.service('columnChartService', columnChartService)
.service('lineChartService', lineChartService)
.service('multipleChartService', multipleChartService)
.service('pieChartService', pieChartService)
.service('firebaseData', firebaseData)

.name;

export default ChartsModule;
