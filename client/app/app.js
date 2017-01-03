import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import amCharts from 'amcharts3';
import amChartsSerial from 'amcharts3/amcharts/serial';
import amChartsPie from 'amcharts3/amcharts/pie';
import amChartsThemesDark from 'amcharts3/amcharts/themes/black';
import angularfire from 'angularfire';
import Firedbservice from './firedb.service';
import 'normalize.css';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import angularAria from 'angular-aria';
import ngMessages from 'angular-messages';
import 'angular-material/angular-material.css';


angular.module('app', [
    uiRouter,
    Common,
    Components,
    ngMaterial,
    angularAnimate,
    angularSanitize,
    angularAria,
    ngMessages
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)
  .service('Firedbservice',Firedbservice);
