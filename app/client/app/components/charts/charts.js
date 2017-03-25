import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import 'angular-material/angular-material.css';
import chartsComponent from './charts.component';

import HardcodeConfigService from '../../app.globalHardcodeConfig.service';
import DialogService from './charts.dialogBuild.service';
import ChartsFirebaseDataService from './charts.firebaseData.service';

import dragularModule from 'dragular/src/dragularModule';
import dragularCss from 'dragular/src/dragularSource.css';
import dragularService from 'dragular/src/dragularService';
import userCharts from './userCharts/userCharts.component';
import globalChart from './globalCharts/globalChart.component';


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
.component('userCharts', userCharts)
.component('globalChart', globalChart)

.service('HardcodeConfigService', HardcodeConfigService)
.service('ChartsFirebaseDataService', ChartsFirebaseDataService)
.service('DialogService', DialogService)

.name;

export default ChartsModule;
