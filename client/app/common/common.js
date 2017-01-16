import angular from 'angular';
import AppHeader from './appheader/appheader';
import AppNav from './appnav/appnav';
import LanguageChange from './languageChange/languageChange';

let commonModule = angular.module('app.common', [
  AppHeader,
  AppNav,
  LanguageChange
])

.name;

export default commonModule;
