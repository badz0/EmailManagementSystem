import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Charts from './charts/charts';
import Firedb from './firedb/firedb';
import Cabinet from './cabinet/cabinet';
import deledit from './deledit/deledit';
import auth from './auth/auth';

let componentModule = angular.module('app.components', [
  Home,
  About,
  deledit,
  Charts,
  Firedb,
  Cabinet,
  auth
])

.name;

export default componentModule;
