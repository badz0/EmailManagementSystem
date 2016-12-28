import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Charts from './charts/charts';
import Firedb from './firedb/firedb';
import Cabinet from './cabinet/cabinet';
import Grid from './grid/grid';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Charts,
  Cabinet,
  Grid,
  Firedb
])

.name;

export default componentModule;
