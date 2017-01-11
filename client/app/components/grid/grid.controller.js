import * as firebase from "firebase";

class GridController {
  	constructor(Firedbservice, $firebaseObject) {
    "ngInject";
    const ref = firebase.database().ref().child('user/8').child('listOfEmails');
    this.data = $firebaseObject(ref);
  	}
  $onInit(){
    this.name = 'grid';
    this.gridOptions = {
      enableFiltering: true,
      exporterMenuCsv: false,
      enableGridMenu: true,
    	columnDefs: [
          { name: 'ui-route', enableSorting: false, enableHiding: false, enableFiltering: false, cellTemplate: '<a class="cell-template-ref" ui-sref="email({ id: row.entity.id })">{{row.entity.recipient}}</a>' },
          { name:'subject', enableSorting: true, field: 'subject'},
          { name:'date', enableSorting: true, field: 'date'},
        ],
    	data: this.data
    };
  }
}
export default GridController;
