import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import 'angular-material/angular-material.css';
import chartsComponent from './charts.component';

import globalHardcodeConfigFactory from '../../app.globalHardcodeConfig.js';
import chartService from  './charts.chart.service';
import chartsFirebaseDataFactory from './charts.firebaseData.factory';
import dragularModule from 'dragular/src/dragularModule';
import dragularCss from 'dragular/src/dragularSource.css';
import dragularService from 'dragular/src/dragularService';
import dialogDataService from './charts.dialog.service';
import lineChart from './lineChart/linechart.component';

let ChartsModule = angular.module('charts', [
  uiRouter,
  ngMaterial,
  dragularModule,
  angularAria,
  angularAnimate
])

.config(($stateProvider, $mdIconProvider) => {
  'ngInject';
  $stateProvider
    .state('charts', {
      url: '/charts',
      component: 'charts'
    });
  $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
})


.component('charts', chartsComponent)
.component('lineChart', lineChart)

.factory('globalHardcodeConfigFactory', globalHardcodeConfigFactory)
.factory('chartsFirebaseDataFactory', chartsFirebaseDataFactory)


.service('chartService', chartService)
.service('dialogDataService', dialogDataService)
.directive('someDirective', function() {
  return {
    template: '<div class="charts-view" id="linechart"></div>'
  };
})

.name;

export default ChartsModule;
