import * as firebase from 'firebase';
import controller from './printWindow/printWindow.controller';
import template from './printWindow/printWindow.html';

class UserTableController {
  constructor(Firedbservice, $firebaseObject,$mdDialog,$document) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.document = $document;
    const ref = firebase.database().ref().child('user');
    this.users = $firebaseObject(ref);   
    const ref_color = firebase.database().ref().child('user/9');
    this.user = $firebaseObject(ref_color);  
  }
  $onInit(){
    this.gridOptions = {
      enableFiltering: true,
      exporterMenuCsv: true,
      enableGridMenu: true,
      enableSorting: true,
         
      
      columnDefs: [
          { name:'Name', enableSorting: true, field: 'name'},
          { name:'Surname', enableSorting: true, field: 'surname'},
          { name:'Nickname', enableSorting: true,  field: 'login'},
          { name:'Birth Date', enableSorting: true, field: 'birthDate'},
          { name:'Email', enableSorting: true, width:200, field: 'email'},
          { name:'Country', enableSorting: true, field: 'country'},
          { name:'City', enableSorting: true, field: 'city'},
          { name:'Registration date', enableSorting: true, width:150, field: 'signUpDate'},
          { name:'Number of Inputs', enableSorting: true, width:200,  field: 'logInCount'},
                    

      ],
      data: this.users
    };
  }

  showWindow($event) {
    this.mdDialog.show({
      template,
      controller,
      controllerAs: '$ctrl',
      parent: this.document.body,
      targetEvent: $event,
      clickOutsideToClose:true,
    })
    .then(data => {
      this.returnData({ data: data });
    });
  }
  
  }

export default UserTableController;  
 