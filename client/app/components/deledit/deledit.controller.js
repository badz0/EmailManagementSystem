import * as firebase from 'firebase';

class deleditController {
    
    constructor($firebaseArray) {
        "ngInject";
        const ref = firebase.database().ref();
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
            "firstname" : this.firstname,
            "lastname" : this.lastname,
            "age" : this.age,
            "note" : this.note,
            "done": "false"
        });
        console.log(this.users);
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
        if (confirm("Are you sure you want to delete message ?")){
            console.log(user);
            this.users.$remove(user)}
        }
        
    remove(user) {
        if (confirm("Are you sure you want to delete marked messages ?")){
            this.users.forEach(function(user) {
                console.log(user);
        if (user.checked) {
            console.log(user);
            let idx = this.users.indexOf(user);
            this.users.splice(idx,1);
        }});
    }}
        
   checkAll() {
        if (this.selectedAll) {
            this.selectedAll = true;
            } else {
            this.selectedAll = false;
            }
            this.users.forEach(function (user) {
            user.checked = this.selectedAll;
            });
            }
            
    copyFbRecord() {
    let oldRef = this.users;
    let newRef = this.block;
        if (confirm("Are you sure you want to move marked messages to blocklist ?")){
            oldRef.forEach(function(user) {
        if (user.checked) {
            let idx = this.users.indexOf(user);
            newRef.push(user);
            oldRef.splice(idx,1);
        }})}
        console.log(newRef);
    }
            
    deleteUserBlock(user) {
        if (confirm("Are you sure you want to delete message ?")){
            let idx = this.block.indexOf(user);
            this.block.splice(idx,1)}
    }
    
    copyBack() {
    let oldRef = this.block;
    let newRef = this.users;
        if (confirm("Are you sure you want to move marked messages back to general list ?")){
            oldRef.forEach(function(user) {
        if (user.checked) {
            let idx = oldRef.indexOf(user);
            newRef.push(user);
            oldRef.splice(idx,1);
        }})}
        console.log(newRef);
    }}

export default deleditController;


              