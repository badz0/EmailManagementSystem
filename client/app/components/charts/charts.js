import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import 'angular-material/angular-material.css';
import chartsComponent from './charts.component';
import columnChartComponent from './columnChart/columnChart.component';
import lineChartComponent from './lineChart/lineChart.component';
import pieChartComponent from './pieChart/pieChart.component';


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
.component('columnChart', columnChartComponent)
.component('lineChart', lineChartComponent)
.component('pieChart', pieChartComponent)

  
.name;

export default ChartsModule;
