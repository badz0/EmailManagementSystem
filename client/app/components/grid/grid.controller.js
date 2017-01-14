import * as firebase from 'firebase';
class GridController {
  constructor(Firedbservice, $firebaseObject, $scope) {
    'ngInject';
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    this.data = $firebaseObject(ref);
    let social = [];
    let spam = [];
    let block = [];
    let email = [];
    ref.on('child_added', function(snapshot) {
      if (snapshot.val().content.indexOf('facebook') > -1) {
        social.push(snapshot.val());
      };
    });
    ref.on('child_added', function(snapshot) {
      if (snapshot.val().content.indexOf('SALE', 'free') > -1) {
        spam.push(snapshot.val());
      };
    });
    ref.on('child_added', function(snapshot) {
      if (snapshot.val().isSafe === false) {
        block.push(snapshot.val());
      };
    });
    ref.on('child_added', function(snapshot) {
      if ((snapshot.val().isSafe === true) && (!snapshot.val().content.indexOf('SALE', 'free') > -1) && (!snapshot.val().content.indexOf('facebook') > -1)) {
        email.push(snapshot.val());
      };
    });
    this.socialEmails = social;
    this.spamEmails = spam;
    this.blockEmails = block;
    this.safeEmails = email;
    this.mainPost = function() {
      this.gridOptions.data = this.data;
    }
    this.social = function() {
      this.gridOptions.data = this.socialEmails;
    }
    this.spam = function() {
      this.gridOptions.data = this.spamEmails;
    }
    this.block = function() {
      this.gridOptions.data = this.blockEmails;
    }
    this.email = function() {
      this.gridOptions.data = this.safeEmails;
    }
  }
  $onInit() {
    this.name = 'grid';
    this.gridOptions = {
      enableSorting: true,
      enableFiltering: true,
      exporterMenuCsv: false,
      enableGridMenu: true,
      columnDefs: [{
        name: 'mails',
        cellTemplate: '<a class="cell-template-ref" ui-sref="email({ id: row.entity.id })">{{row.entity.recipient}}</a>'
      }, {
        name: 'name',
        field: 'name'
      }, {
        name: 'city',
        field: 'city'
      }, {
        name: 'action',
        enableHiding: false,
        enableFiltering: false,
        cellTemplate: '<button class="delete" ng-click="grid.appScope.$ctrl.deleteUser(row)">Delete</button><button ng-click="grid.appScope.$ctrl.safeOrBlock(row)"> blocklist</button>'
      }, ],

      data: this.data
    };
  }
  deleteUser(row) {
    console.log(row.entity.id);
    if (confirm('Are you sure you want to delete letter ?')) {
      firebase.database().ref().child('user/0').child(`listOfEmails/${row.entity.id}`).remove();
    }
  };
  safeOrBlock(row) {
    console.log(row.entity.isSafe)
    if (row.entity.isSafe) {
      row.entity.isSafe = false;
      this.data.$save(row);
    }
    else {
      row.entity.isSafe = true;
      this.data.$save(row);
    }
  };
}
export default GridController;