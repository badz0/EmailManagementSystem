import angular from 'angular';
import Home from './home/home';
import Charts from './charts/charts';
import Cabinet from './cabinet/cabinet';
import Grid from './grid/grid';
import Switcher from './userDetails/switcher/switcher';
import UserTable from './userDetails/userTable/userTable';
import AddEmail from './addEmail/addEmail';
import auth from './auth/auth';



let componentModule = angular.module('app.components', [
  Home,
  Charts,
  Switcher,
  UserTable,
  Cabinet,
  AddEmail,
  Grid,
  auth
])

.name;

export default componentModule;
