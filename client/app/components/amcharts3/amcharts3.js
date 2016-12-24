import angular from 'angular';
import uiRouter from 'angular-ui-router';
import amcharts3Component from './amcharts3.component';
import chartOneComponent from './chartOne/chartOne.component';
import chartTwoComponent from './chartTwo/chartTwo.component';
import chartThreeComponent from './chartThree/chartThree.component';


let Amcharts3Module = angular.module('amcharts3', [
  uiRouter
])

.config(($stateProvider) => {
  'ngInject';
  $stateProvider
    .state('amcharts3', {
      url: '/amcharts3',
      component: 'amcharts3'
    });
})

.component('amcharts3', amcharts3Component)
.component('chartOne', chartOneComponent)
.component('chartTwo', chartTwoComponent)
.component('chartThree', chartThreeComponent)
  
.name;

export default Amcharts3Module;
