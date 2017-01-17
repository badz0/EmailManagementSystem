import * as firebase from 'firebase';
import templateDelete from './confirmDialog/confirm.template.del.html';
import templateBlock from './confirmDialog/confirm.template.block.html';
import controller from './confirmDialog/confirm.controller.js';
class GridController {
  constructor(Firedbservice, EmailDetailService, $firebaseObject, $mdDialog) {
    'ngInject';
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    const refUser = firebase.database().ref().child('user/0');
    this.data = $firebaseObject(ref);
    this.users = $firebaseObject(refUser);
    this.mdDialog = $mdDialog;
    this.EmailDetailServiceSocial = EmailDetailService.getSocial();
    this.EmailDetailServiceAds = EmailDetailService.getAds();
    this.EmailDetailServiceBlock = EmailDetailService.getBlock();
    this.EmailDetailServiceEmail = EmailDetailService.getEmail();
  }
  $onInit() {
    this.name = 'grid';
    this.gridOptions = {
      enableFiltering: true,
      exporterMenuCsv: false,
      enableGridMenu: true,
      columnDefs: [{
        name: 'ui-route',
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
      data: this.data
    };
  }
  allEmails() {
    this.gridOptions.data = this.data;
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
      firebase.database().ref().child('user/0').child(`listOfEmails/${row.entity.id-1}`).remove();
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
      this.data.$save(row);
    });
  }
}
export default GridController;