import angular from 'angular';
import angularfire from 'angularfire';
import uiRouter from 'angular-ui-router';
import angulargrid from 'angular-ui-grid';
import 'angular-ui-grid/ui-grid.css';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import angularfire from 'angularfire';
import 'normalize.css';

angular.module('app', [
    angularfire,
    uiRouter,
    'ui.grid',
    Common,
    Components,
    angularfire
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

.component('app', AppComponent);
