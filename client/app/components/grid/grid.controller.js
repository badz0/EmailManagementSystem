import * as firebase from 'firebase';

class GridController {
  	constructor(Firedbservice, $firebaseArray) {
    'ngInject';
    const ref = firebase.database().ref().child('email');
    this.name = 'Hello from Firebase';
    this.data = $firebaseArray(ref);
    this.gridOptions = { 
    	enableSorting: true,
    	columnDefs: [
          { name: 'ui-route', cellTemplate: '<a class="cell-template-ref" ui-sref="email({ id: row.entity.id })">{{row.entity.recipient}}</a>' },
          { name:'subject', field: 'subject' },
          { name:'date', field: 'date'},
          { name:'button', cellTemplate: '<button>dutton</button>'},
        ],
    	data: this.data
    };
  	}
  $onInit(){
    this.name = 'grid';
  }
}
export default GridController;
