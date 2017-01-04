import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Charts from './charts/charts';
import Firedb from './firedb/firedb';
import Cabinet from './cabinet/cabinet';
<<<<<<< HEAD
import Grid from './grid/grid';
=======
import deledit from './deledit/deledit';
>>>>>>> develop

let componentModule = angular.module('app.components', [
  Home,
  About,
  deledit,
  Charts,
  Cabinet,
  Grid,
  Firedb
])

.name;

export default componentModule;
