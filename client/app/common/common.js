import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import AppHeader from './appheader/appheader';
import AppNav from './appnav/appnav';
import LanguageChange from './languageChange/languageChange';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User,
  AppHeader,
  AppNav,
  LanguageChange
])
  
.name;

export default commonModule;
