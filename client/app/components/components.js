import angular from 'angular';
import Home from './home/home';
import Charts from './charts/charts';
import Cabinet from './cabinet/cabinet';
import Grid from './grid/grid';
import deledit from './deledit/deledit';
import AddEmail from './addEmail/addEmail';
import auth from './auth/auth';

let componentModule = angular.module('app.components', [
  Home,
  deledit,
  Charts,
  Cabinet,
  AddEmail,
  Grid,
  auth
])

.name;

export default componentModule;
