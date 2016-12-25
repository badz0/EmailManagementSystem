import * as firebase from 'firebase';

class volodController {
  constructor($firebaseArray) {
    "ngInject";
    let ref = firebase.database().ref();
    let vm = this;
    vm.name = 'volod';
    vm.users = $firebaseArray(ref);
    vm.block = [];
   
    function clearForm () {
        vm.firstname = '';
        vm.lastname = '';
        vm.age = '';
        vm.note = '';
        }
   
   vm.showForm = function(){
        vm.editFormShow = false;
        vm.addFormShow = true;
          
    };
    
    vm.hideForm = function(){
        vm.addFormShow = false;
        vm.editFormShow = false;
        clearForm ();
    };
    
    vm.AddPerson = function(){
        vm.users.$add({
            "firstname" : vm.firstname,
            "lastname" : vm.lastname,
            "age" : vm.age
        });
        console.log(vm.users);
        clearForm();
    };
    
    vm.showUser = function(user){
        vm.editFormShow = true;
        vm.addFormShow = false;
        vm.note = user.note;
        vm.id = user.$id;
        };
       
        
    vm.editFormSubmit = function(){
        let id = vm.id;
        console.log(id);
        var record = vm.users.$getRecord(id);
        record.note = vm.note;
        vm.users.$save(record);
        clearForm();
        };
       
    vm.deleteUser = function(user) {
        if (confirm("Are you sure you want to delete message ?")){
            vm.users.$remove(user)}
        };
        
    vm.remove = function() {
        if (confirm("Are you sure you want to delete marked messages ?")){
            vm.users.forEach(function(user) {
        if (user.checked) {
            vm.users.$remove(user);
        }})}};
        
    vm.checkAll = function () {
        if (vm.selectedAll) {
            vm.selectedAll = true;
            } else {
            vm.selectedAll = false;
            }
            vm.users.forEach(function (user) {
            user.checked = vm.selectedAll;
            });
            };
            
    vm.copyFbRecord = function() {
    let oldRef = vm.users;
    let newRef = vm.block;
        if (confirm("Are you sure you want to move marked messages to blocklist ?")){
            oldRef.forEach(function(user) {
        if (user.checked) {
            let idx = vm.users.indexOf(user);
            newRef.push(user);
            oldRef.splice(idx,1);
        }})}
        console.log(newRef);
    };
            
    vm.deleteUserBlock = function(user) {
        if (confirm("Are you sure you want to delete message ?")){
            let idx = vm.block.indexOf(user);
            vm.block.splice(idx,1)}
    };
    
    vm.copyBack = function() {
    let oldRef = vm.block;
    let newRef = vm.users;
        if (confirm("Are you sure you want to move marked messages back to general list ?")){
            oldRef.forEach(function(user) {
        if (user.checked) {
            let idx = oldRef.indexOf(user);
            newRef.push(user);
            oldRef.splice(idx,1);
        }})}
        console.log(newRef);
    }}}

export default volodController;


              