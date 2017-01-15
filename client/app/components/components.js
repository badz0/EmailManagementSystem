import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Charts from './charts/charts';
import Firedb from './firedb/firedb';
import Cabinet from './cabinet/cabinet';
import deledit from './deledit/deledit';
import Grid from './grid/grid';
import AddEmail from './addEmail/addEmail';

let componentModule = angular.module('app.components', [
  Home,
  About,
  deledit,
  Charts,
  Firedb,
  Cabinet,
  Grid,
  AddEmail
])

.name;

export default componentModule;
