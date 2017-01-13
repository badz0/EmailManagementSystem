import * as firebase from 'firebase';

class GridController {
    constructor(Firedbservice, $firebaseObject) {
        'ngInject';
        const ref = firebase.database().ref().child('user/0').child('listOfEmails');
        this.data = $firebaseObject(ref);
        let social = [];
        let spam = [];
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
        this.socialEmails = social;
        this.spamEmails = spam;
        this.mainPost = function() {
            this.gridOptions.data = this.data;
        }
        this.social = function() {
            this.gridOptions.data = this.socialEmails;
        }
        this.spam = function() {
            this.gridOptions.data = this.spamEmails;
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
            ],
            data: this.data
        };
    }
}
export default GridController;
