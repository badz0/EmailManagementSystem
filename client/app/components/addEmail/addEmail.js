import angular from 'angular';
import uiRouter from 'angular-ui-router';
import addEmailComponent from './addEmail.component';
import ngMessages from 'angular-messages';

let addEmailModule = angular.module('addEmail', [
  uiRouter,
  'ngMessages'
])

.component('addEmail', addEmailComponent)

.name;

export default addEmailModule;
