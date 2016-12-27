import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import AppHeader from './appheader/appheader';
import AppNav from './appnav/appnav';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  AppHeader,
  AppNav
])
  
.name;

export default commonModule;
