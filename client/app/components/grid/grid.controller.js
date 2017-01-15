import * as firebase from "firebase";

class GridController {
    constructor(Firedbservice, $firebaseObject) {
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
        this.emails = email;
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
            this.gridOptions.data = this.emails;
        }
    }
    $onInit() {
        this.name = 'grid';
        this.gridOptions = {
            enableFiltering: true,
            exporterMenuCsv: false,
            enableGridMenu: true,
            columnDefs: [
                { name: 'ui-route', enableSorting: false, enableHiding: false, cellTemplate: '<a class="cell-template-ref" ui-sref="email({ id: row.entity.id })">{{row.entity.recipient}}</a>' },
                { name: 'subject', enableSorting: true, field: 'subject' },
                { name: 'date', enableSorting: true, field: 'date' },
                { name: 'action', cellTemplate: '<button class="delete" ng-click="grid.appScope.$ctrl.deleteUser(row)">Delete</button><button class="btn primary" ng-click="grid.appScope.$ctrl.safeOrBlock(row)">Blocklist</button>' },
            ],
            data: this.data
        };
    }
    deleteUser(row) {
    if (confirm('Are you sure you want to delete letter ?')){
      firebase.database().ref().child('user/0').child(`listOfEmails/${row.entity.id}`).remove();
    }};
    safeOrBlock(row) {
      if (row.entity.isSafe) {
        row.entity.isSafe = false;
        this.data.$save(row);
      } else { 
        row.entity.isSafe = true;
        this.data.$save(row);
      };
  }
}
export default GridController;