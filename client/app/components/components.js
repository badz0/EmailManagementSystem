import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Cabinet from './cabinet/cabinet';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Cabinet
])

.name;

export default componentModule;
