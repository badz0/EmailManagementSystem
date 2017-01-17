import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appnavComponent from './appnav.component';
import AuthService  from '../../components/auth/auth.service';

let appnavModule = angular.module('appnav', [
  uiRouter
])

.component('appnav', appnavComponent)
.service('AuthService', AuthService)
.name;

export default appnavModule;
