import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angulargrid from 'angular-ui-grid';
import 'angular-ui-grid/ui-grid.css';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import angularfire from 'angularfire';
import Firedbservice from './firedb.service';
import 'normalize.css';
import amCharts from 'amcharts3';
import amChartsSerial from 'amcharts3/amcharts/serial';
import amChartsPie from 'amcharts3/amcharts/pie';
import amChartsThemesBlack from 'amcharts3/amcharts/themes/black';
import amChartsThemesLight from 'amcharts3/amcharts/themes/light';
import amChartsThemesDark from 'amcharts3/amcharts/themes/dark';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import angularAria from 'angular-aria';
import ngMessages from 'angular-messages';
import 'angular-material/angular-material.css';
import angularTranslate from 'angular-translate';
import angTransLocalSrotage from 'angular-translate-storage-local';
import angTransCookieStorage from 'angular-translate-storage-cookie';
import angTransHandlerLog from 'angular-translate-handler-log';
import ngCookies from 'angular-cookies';
import 'material-design-icons/iconfont/material-icons.css';
import translationEn from './locale-en.json';
import translationUa from './locale-ua.json';
import pdfMaker from 'pdfmake/build/pdfmake.min.js';
import vfs_fonts from 'pdfmake/build/vfs_fonts.js';
import csv from 'csv';
import FiredbAutorisation from './app.fireb.authentification.service.js';

angular.module('app', [
  uiRouter,
  'ui.grid',
  'ui.grid.exporter',
  Common,
  Components,
  ngMaterial,
  angularAnimate,
  angularSanitize,
  angularAria,
  ngMessages,
  angularfire,
  angularTranslate,
  ngCookies,
  'ui.grid.selection',
  'ui.grid.exporter',
  'ui.grid.edit',
  'ui.grid.pagination'
])
.config(($locationProvider, $mdThemingProvider, $translateProvider) => {
  'ngInject';
  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(true).hashPrefix('!');

  $mdThemingProvider.theme('default')
  .primaryPalette('teal')
  .accentPalette('red');

  $translateProvider.translations('en', translationEn)
  .translations('ua', translationUa)
  .preferredLanguage('en')
  .useMissingTranslationHandlerLog()
  .useSanitizeValueStrategy('sanitize')
  .useLocalStorage();
})
.component('app', AppComponent)
.service('Firedbservice',Firedbservice)
.service('FiredbAutorisation', FiredbAutorisation);