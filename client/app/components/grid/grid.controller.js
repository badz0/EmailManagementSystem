import * as firebase from 'firebase';

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
    let confirm = this.mdDialog.confirm()
      .title('Are you sure to delete the record?')
      .textContent('Record will be deleted permanently.')
      .ok('Yes')
      .cancel('No');
    this.mdDialog.show(confirm).then(() => {
      firebase.database().ref().child('user/0').child(`listOfEmails/${row.entity.id-1}`).remove();
    });
  }

  safeOrBlock(row) {
    let confirm = this.mdDialog.confirm()
      .title('Are you sure to move the record to blocklist?')
      .textContent('Record will be moved to blocklist.')
      .ok('Yes')
      .cancel('No');
    this.mdDialog.show(confirm).then(() => {
      if (row.entity.isSafe) {
        row.entity.isSafe = false;
        this.data.$save(row);
      }
      else {
        row.entity.isSafe = true;
        this.data.$save(row);
      };
    });
  }
}
export default GridController;