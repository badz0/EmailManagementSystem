import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angulargrid from 'angular-ui-grid';
import 'angular-ui-grid/ui-grid.css';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import ngMaterial from 'angular-material';
import angularAnimate from 'angular-animate';
import angularSanitize from 'angular-sanitize';
import angularAria from 'angular-aria';
import ngMessages from 'angular-messages';
import 'angular-material/angular-material.css';
//import 'material-design-icons/iconfont/material-icons.css';
import angularTranslate from 'angular-translate';
import angTransLocalSrotage from 'angular-translate-storage-local';
import angTransCookieStorage from 'angular-translate-storage-cookie';
import angTransHandlerLog from 'angular-translate-handler-log';
import ngCookies from 'angular-cookies';
import translationEn from './locale-en.json';
import translationUa from './locale-ua.json';
import Firedbservice from './firedb.service';
import angularfire from 'angularfire';


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
  angularfire,
  angularTranslate,
  ngCookies
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
.service('Firedbservice',Firedbservice);
