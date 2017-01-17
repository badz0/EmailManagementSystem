import countries from './cabinet.countries.json';
import * as firebase from 'firebase';

class CabinetController {
  constructor($firebaseObject,Firedbservice,$mdColorPalette,Сonstants,AuthService,authManager,FiredbAutorisation) {'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      const ref = firebase.database().ref().child(`user/${res.userData.index}`);
      this.users = $firebaseObject(ref);
      this.res=res.userData.index;
    });
    this.colors = Object.keys($mdColorPalette);
    this.avatar=Сonstants.avatarDefault.IMAGE_LINK;
    this.AuthService = AuthService;
  }
  $onInit () {
    this.countries=countries;
    this.user={};
  }
  submitForm() {
    this.user.country=this.user.country.country||'';
    firebase.database().ref().child(`user/${this.res}`).update(this.user);
    this.user={};
  }
  getFileName(){
    let url=this.users.avatar;
    url = url.split(/[%2F\?]/)[3];
    return url;
  }
  deleteAvatar(){
    firebase.storage().ref().child(`user${this.res}/${this.getFileName()}`).delete();
    this.user.avatar=this.avatar;
    firebase.database().ref().child(`user/${this.res}`).update(this.user);
  }
  clearCity(){
    this.user.city = null;
  }
  selectTheme(color){
    this.user.themeColor = color;
    firebase.database().ref().child(`user/${this.res}`).update(this.user);
  }
}

export default CabinetController;
