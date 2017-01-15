import * as firebase from 'firebase';

class AppheaderController {
  constructor($mdSidenav, $translate,$firebaseObject,Firedbservice,AuthService,authManager) {
    'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
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

  changeLanguage(key) {
    this.translate.use(key);
    this.lan = key;
  }
}

export default AppheaderController;
