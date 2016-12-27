import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Firedb from './firedb/firedb';
import Cabinet from './cabinet/cabinet';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Firedb,
  Cabinet
])

.name;

export default componentModule;
