import * as firebase from 'firebase';

class AppheaderController {
  constructor($mdSidenav, $firebaseObject, Firedbservice, AuthService, authManager) {
    'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
    this.mdSidenav = $mdSidenav;
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    AuthService.getProfileDeferred().then((profile)=> {
      this.profile = profile;
    });
  }

  toggleMenu() {
    this.mdSidenav('menu').toggle();
  }

}

export default AppheaderController;
