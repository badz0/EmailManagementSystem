import * as firebase from "firebase";

class GridController {
  	constructor(Firedbservice, $firebaseObject) {
    "ngInject";
    const ref = firebase.database().ref().child('user');
    this.data = $firebaseObject(ref);
  	}
  $onInit(){
    this.name = 'grid'; 
    this.gridOptions = {
    	enableSorting: true,
      enableFiltering: true,
      exporterMenuCsv: false,
      enableGridMenu: true,
    	columnDefs: [
          { name: 'ui-route', enableHiding: false, enableFiltering: false, cellTemplate: '<a class="cell-template-ref" ui-sref="email({ id: row.entity.id })">{{row.entity.email}}</a>' },
          { name:'name', field: 'name'},
          { name:'city', field: 'city'},
        ],
    	data: this.data
    };
  }
}
export default GridController;
