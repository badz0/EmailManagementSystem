import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Charts from './charts/charts';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Charts
])

.name;

export default componentModule;
