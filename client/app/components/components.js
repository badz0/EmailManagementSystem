import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Cabinet from './cabinet/cabinet';
import Grid from './grid/grid';
import deledit from './deledit/deledit';
import auth from './auth/auth';
import Charts from './charts/charts';
import Firedb from './firedb/firedb';

let componentModule = angular.module('app.components', [
  Home,
  About,
  deledit,
  Charts,
  Firedb,
  Cabinet,
  auth,
  Grid
])

.name;

export default componentModule;
