import * as firebase from 'firebase';
import templateDelete from './confirmDialog/confirm.template.del.html';
import templateBlock from './confirmDialog/confirm.template.block.html';
import controller from './confirmDialog/confirm.controller.js';
class GridController {
  constructor(Firedbservice, EmailDetailService, $firebaseObject, FiredbAutorisation, $mdDialog) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.allEmailsData = res.userData.listOfEmails;
      this.users = res.userData;
      this.EmailDetailServiceSocial = EmailDetailService.getSocial();
      this.EmailDetailServiceAds = EmailDetailService.getAds();
      this.EmailDetailServiceBlock = EmailDetailService.getBlock();
      this.EmailDetailServiceEmail = EmailDetailService.getEmail();
      this.gridOptions.data = this.allEmailsData;
    });
    this.gridOptions = {
      data: this.allEmailsData
    };
  }
  $onInit() {
    this.gridOptions = {
      enableFiltering: true,
      exporterMenuCsv: false,
      enableGridMenu: true,
      columnDefs: [{
        name: 'email',
        enableFiltering: false,
        enableSorting: false,
        enableHiding: false,
        cellTemplate: '<a class="cell-template-ref" ui-sref="email({ id: row.entity.id })">{{row.entity.recipient}}</a>'
      }, {
        name: 'subject',
        enableSorting: true,
        field: 'subject'
      }, {
        name: 'date',
        enableSorting: true,
        field: 'date'
      }, {
        name: 'action',
        enableFiltering: false,
        cellTemplate: '<button class="delete" ng-click="grid.appScope.$ctrl.deleteUser(row)">Delete</button><button class="btn primary" ng-click="grid.appScope.$ctrl.safeOrBlock(row)">Blocklist</button>'
      }, ],
    };
  }
  allEmails() {
    this.gridOptions.data = this.allEmailsData;
  }
  emailEmails() {
    this.gridOptions.data = this.EmailDetailServiceEmail;
  }
  socialEmails() {
    this.gridOptions.data = this.EmailDetailServiceSocial;
  }
  blockEmails() {
    this.gridOptions.data = this.EmailDetailServiceBlock;
  }
  adsEmails() {
    this.gridOptions.data = this.EmailDetailServiceAds;
  }
  deleteUser(row) {
    let template = templateDelete;
    let confirm = this.mdDialog.confirm({
      template,
      controller,
      controllerAs: '$ctrl',
      clickOutsideToClose: true
    });
    this.mdDialog.show(confirm).then(() => {
      firebase.database().ref().child(`user/${this.res}`).child(`listOfEmails/${row.entity.id-1}`).remove();
    });
  }
  safeOrBlock(row) {
    let template = templateBlock;
    let confirm = this.mdDialog.confirm({
      template,
      controller,
      controllerAs: '$ctrl',
      clickOutsideToClose: true
    });
    this.mdDialog.show(confirm).then(() => {
      row.entity.isSafe = !row.entity.isSafe;
      this.allEmailsData.$save(row);
    });
  }
}
export default GridController;