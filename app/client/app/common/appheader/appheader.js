import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appheaderComponent from './appheader.component';
import AuthService  from '../../components/auth/auth.service';

let appheaderModule = angular.module('appheader', [
  uiRouter
])
.component('appheader', appheaderComponent)
.service('AuthService', AuthService)
.name;

export default appheaderModule;
