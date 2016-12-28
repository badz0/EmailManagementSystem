import angular from 'angular';
import angularfire from 'angularfire';
import uiRouter from 'angular-ui-router';
import angulargrid from 'angular-ui-grid';
import 'angular-ui-grid/ui-grid.css';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    'ui.grid',
    Common,
    Components,
    angularfire
  ])
  .config(($locationProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

.component('app', AppComponent);
