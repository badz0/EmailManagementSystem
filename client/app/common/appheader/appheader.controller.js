import * as firebase from 'firebase';

class AppheaderController {
  constructor($mdSidenav, $translate,$firebaseObject,Firedbservice,AuthService,authManager,FiredbAutorisation) {
    'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      const ref = firebase.database().ref().child(`user/${res.userData.index}`);
      this.users = $firebaseObject(ref);
    });
    this.mdSidenav = $mdSidenav;
    this.translate = $translate;
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    AuthService.getProfileDeferred().then((profile)=> {
      this.profile = profile;
    });
  }
  $onInit() {
    this.lan = this.translate.use();
  }
  toggleMenu() {
    this.mdSidenav('menu').toggle();
  }
}

export default AppheaderController;
