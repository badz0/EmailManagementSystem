import * as firebase from 'firebase';
class deleditController {
  constructor($firebaseArray) {
    'ngInject';
      const ref = firebase.database().ref().child('email');
      this.users = $firebaseArray(ref);
  }    
  $onInit () {
    this.name = 'volod';
    this.block = []; 
  }
  clearForm () {
    this.firstname = '';
    this.lastname = '';
    this.age = '';
    this.note = '';
  }
  showForm(){
    this.editFormShow = false;
    this.addFormShow = true;
  }
  hideForm(){
    this.addFormShow = false;
    this.editFormShow = false;
    this.clearForm ();
  }
  AddPerson(){
    this.users.$add({
      'firstname' : this.firstname,
      'lastname' : this.lastname,
      'age' : this.age,
      'note' : this.note,
      'isSafe': 'true'
  });
  this.clearForm();
  }
  showUser(user){
    this.editFormShow = true;
    this.addFormShow = false;
    this.note = user.note;
    this.id = user.$id;
  }
  editFormSubmit(){
    let id = this.id;
    console.log(id);
    let record = this.users.$getRecord(id);
    record.note = this.note;
    this.users.$save(record);
    this.clearForm();
  }
  deleteUser(user) {
    if (confirm('Are you sure you want to delete letter ?')){
      this.users.$remove(user)
  }}
  remove () {
    if (confirm('Are you sure you want to delete marked messages ?')){
      this.users.forEach( user => {
    if (user.checked) {
      this.users.$remove(user);
  }})}}
  
  safeOrBlock() {
      this.users.forEach( user => {
    if (user.isSafe) {
      this.users.$save(user);
      } else { 
      this.users.$save(user);
      }})
      }
  
  checkAll () {
    this.users.forEach( user => {
      user.checked = true;
      });
  };
  uncheckAll () {
    this.users.forEach( user => {
      user.checked = false;
  })}
  
  checkAllBlock () {
    this.users.forEach( user => {
      user.isSafe = true;
      this.users.$save(user);
      });
  };
  uncheckAllBlock () {
    this.users.forEach( user => {
      user.isSafe = false;
      this.users.$save(user);
    })}
}
  
export default deleditController;


              