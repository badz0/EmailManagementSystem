import countries from './cabinet.countries.json';

class CabinetController {
  constructor($firebaseObject,$mdColorPalette,Сonstants,FiredbAutorisation) {'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.res=res.userData.index;
      this.users =this.FiredbAutorisation.getUserData(this.res);
    });
    this.colors = Object.keys($mdColorPalette);
    this.avatar=Сonstants.avatarDefault.IMAGE_LINK;
  }
  $onInit () {
    this.countries=countries;
    this.user={};
  }
  submitForm() {
    this.user.country=this.user.country.country||'';
    this.FiredbAutorisation.updateUser(this.res,this.user);
    this.user={};
  }
  getFileName(){
    let url=this.users.avatar;
    url = url.split(/[%2F\?]/)[3];
    return url;
  }
  deleteAvatar(){
    let ava=this.getFileName();
    this.FiredbAutorisation.deleteUserAvatar(this.res,ava);
    this.user.avatar=this.avatar;
    this.FiredbAutorisation.updateUser(this.res,this.user);
    this.user={};
  }
  clearCity(){
    this.user.city = null;
  }
  selectTheme(color){
    this.user.themeColor = color;
    this.FiredbAutorisation.updateUser(this.res,this.user);
  }
}

export default CabinetController;
