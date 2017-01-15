import countries from './cabinet.countries.json';
import * as firebase from 'firebase';

class CabinetController {
  constructor($firebaseObject,Firedbservice,$mdColorPalette,Сonstants) {'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
    this.colors = Object.keys($mdColorPalette);
    this.avatar=Сonstants.avatarDefault.IMAGE_LINK;
  }
  $onInit () {
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
  getFileName(){
    let url=this.users.avatar;
    url = url.split(/[%2F\?]/)[3];
    return url;
  }
  deleteAvatar(){
    firebase.storage().ref().child(`user9/${this.getFileName()}`).delete();
    this.user.avatar=this.avatar;
    firebase.database().ref().child('user/9').update(this.user);
  }
  clearCity(){
    this.user.city = null;
  }
  selectTheme(color){
    this.user.themeColor = color;
    firebase.database().ref().child('user/9').update(this.user);
  }
}
  
export default CabinetController;
