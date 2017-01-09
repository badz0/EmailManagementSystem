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
    this.user={};
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
   let getFileName=()=>{ 
      let url=this.users.avatar;
      url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
      url = url.substring(url.lastIndexOf("%2F") + 3, url.length);
      console.log(url);
      return url;
      };
    firebase.storage().ref().child(`user9/${getFileName}`).delete();
    this.user.avatar='https://firebasestorage.googleapis.com/v0/b/emailmanagementsystem-d4f11.appspot.com/o/user_avatar_default.gif?alt=media&token=188186f9-52fb-4557-a00e-7dd517e4e2d5';
    firebase.database().ref().child('user/9').update(this.user);
  }
  clearCity(){
     this.user.city = null;
  }
}
  
export default CabinetController;
