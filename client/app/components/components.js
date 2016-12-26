import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Firedb from './firedb/firedb';


let componentModule = angular.module('app.components', [
  Home,
  About,
  Firedb
])

.name;

export default componentModule;
