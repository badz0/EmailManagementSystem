import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authComponent from './auth.component';
import AuthService  from './auth.service';
import AuthRun from './auth.run';
import 'auth0-lock';
import 'angular-lock';
import 'angular-jwt';
<<<<<<< HEAD
=======
import Firedbservice from '../../firedb.service.js';
>>>>>>> develop

let authModule = angular.module('auth', [
  uiRouter,
  'auth0.lock',
  'angular-jwt'
])

.config(($stateProvider, lockProvider,$urlRouterProvider,jwtOptionsProvider) => {
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
<<<<<<< HEAD
    
  jwtOptionsProvider.config({
    tokenGetter: function () {
      return window.localStorage.getItem('id_token');
=======

  jwtOptionsProvider.config({
    tokenGetter: function () {
      return localStorage.getItem('id_token');
>>>>>>> develop
    }
  });
  $urlRouterProvider.otherwise('/auth');
})

.component('auth', authComponent)
<<<<<<< HEAD
=======
.service('Firedbservice',Firedbservice)
>>>>>>> develop
.service('AuthService', AuthService)
.run(()=>AuthRun)
.name;

export default authModule;
