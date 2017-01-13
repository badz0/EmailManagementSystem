import angular from 'angular';
import Home from './home/home';
import Charts from './charts/charts';
import Firedb from './firedb/firedb';
import Cabinet from './cabinet/cabinet';
import Grid from './grid/grid';
import deledit from './deledit/deledit';

let componentModule = angular.module('app.components', [
  Home,
  deledit,
  Charts,
  Cabinet,
  Grid,
  Firedb
])

.name;

export default componentModule;
