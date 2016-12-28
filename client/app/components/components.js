import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Charts from './charts/charts';
import Firedb from './firedb/firedb';
import Cabinet from './cabinet/cabinet';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Charts,
  Firedb,
  Cabinet
])

.name;

export default componentModule;
