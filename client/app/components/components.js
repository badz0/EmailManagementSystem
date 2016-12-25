import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import deledit from './deledit/deledit';

let componentModule = angular.module('app.components', [
  Home,
  About,
  deledit
])

.name;

export default componentModule;
