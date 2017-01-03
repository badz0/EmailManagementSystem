import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';
import AuthService  from './auth.service';
import AuthRun from './auth.run';
import 'auth0-lock';
import 'angular-lock';
import 'angular-jwt';

let authModule = angular.module('auth', [
  uiRouter,
  'auth0.lock',
  'angular-jwt'
])

.config(($stateProvider, lockProvider) => {
  "ngInject";
  $stateProvider
    .state('auth', {
      url: '/auth',
      component: 'auth'
    });
    lockProvider.init({
      clientID: 'YWiJP0aecm768DSElJl8YhqtIbAgx7gm',
      domain: 'nerosman.eu.auth0.com'
    });

})

.component('auth', authComponent)
.service('AuthService', AuthService)

.name;

export default authModule;
