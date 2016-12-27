import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gridComponent from './grid.component';
import { EmailDetailService } from './grid.service';

import emailDetailComponent from './emaildetail/emailDetail.component.js';
import emailDetailController from './emaildetail/emailDetail.controller.js';
import emailDetailTemplate from './emaildetail/emailDetail.html';

let gridModule = angular.module('grid', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('grid', {
      url: '/grid',
      component: 'grid',
      resolve: {
        grid: EmailDetailService => EmailDetailService.getAllEmails()
      }
    })
    .state('email', {
      url: '/email/{emailId}',
      component: 'emailDetail',
      resolve: {
        email: function(EmailDetailService, $transition$) {
          return EmailDetailService.getEmail($transition$.params().emailId);
        }
      }
    });
})

.component('grid', gridComponent)
.service('EmailDetailService', EmailDetailService)
.component('emailDetail', emailDetailComponent)
.name;

export default gridModule;
