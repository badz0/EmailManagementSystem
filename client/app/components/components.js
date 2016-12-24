import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Amcharts3 from './amcharts3/amcharts3';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Amcharts3
])

.name;

export default componentModule;
