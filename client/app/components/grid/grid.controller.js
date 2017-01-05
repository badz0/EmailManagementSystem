import * as firebase from 'firebase';

class GridController {
  	constructor(Firedbservice, $firebaseObject) {
    'ngInject';
    const ref = firebase.database().ref().child('email');
    this.data = $firebaseObject(ref);
  	}
  $onInit(){
    this.name = 'grid';
    this.gridOptions = { 
    	enableSorting: true,
    	columnDefs: [
          { name: 'ui-route', cellTemplate: '<a class="cell-template-ref" ui-sref="email({ id: row.entity.id })">{{row.entity.recipient}}</a>' },
          { name:'subject', field: 'subject' },
          { name:'date', field: 'date'}
        ],
    	data: this.data
    };
  }
}
export default GridController;
