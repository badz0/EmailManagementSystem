import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';
import AuthService  from './auth.service';
import AuthRun from './auth.run';
import 'angular-lock';
import 'angular-jwt';
import Firedbservice from '../../firedb.service.js';

let authModule = angular.module('auth', [
  uiRouter,
  'auth0.lock',
  'angular-jwt'
])

.config(($stateProvider, lockProvider, $urlRouterProvider, jwtOptionsProvider) => {
  'ngInject';
  $stateProvider
    .state('auth', {
      url: '/auth',
      component: 'auth'
    });

  lockProvider.init({
    clientID: 'YWiJP0aecm768DSElJl8YhqtIbAgx7gm',
    domain: 'nerosman.eu.auth0.com'
  });
    
  jwtOptionsProvider.config({
    tokenGetter: () => {
      return window.localStorage.getItem('id_token');
    }
  });
  $urlRouterProvider.otherwise('/');
})

.component('auth', authComponent)
.service('Firedbservice',Firedbservice)
.service('AuthService', AuthService)
.run(()=>AuthRun)
.name;

export default authModule;
