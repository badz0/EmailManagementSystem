import angular from 'angular';
import angularfire from 'angularfire';
import uiRouter from 'angular-ui-router';
import angulargrid from 'angular-ui-grid';
import 'angular-ui-grid/ui-grid.css';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import amCharts from 'amcharts3';
import amChartsSerial from 'amcharts3/amcharts/serial';
import amChartsPie from 'amcharts3/amcharts/pie';
import amChartsThemesDark from 'amcharts3/amcharts/themes/black';


import 'normalize.css';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import angularAria from 'angular-aria';
import ngMessages from 'angular-messages';
import 'angular-material/angular-material.css';

angular.module('app', [
    uiRouter,
    'ui.grid',
    Common,
    Components,
    ngMaterial,
    angularAnimate,
    angularSanitize,
    angularAria,
    ngMessages,
    angularfire
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

.component('app', AppComponent);
