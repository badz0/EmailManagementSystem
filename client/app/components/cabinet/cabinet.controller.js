import countries from './cabinet.countries.json';
import * as firebase from 'firebase';

class CabinetController {
  constructor($firebaseObject,Firedbservice) {'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
  }
  $onInit () {
    this.name = 'cabinet';
    this.countries=countries;
  }
  clearForm(){
    this.user={
      name:'',
      surname:'',
      login:'',
      city:'',
      postadress:'',
      birthDay:'',
      country:''
    };
  }
  submitForm() {
    this.user.country=this.user.country.country||'';
    firebase.database().ref().child('user/9').update(this.user);
    this.clearForm();
  }
  deleteAvatar(){
    firebase.storage().ref().child('user9/9.jpg').delete();
  }
}
  
export default CabinetController;
