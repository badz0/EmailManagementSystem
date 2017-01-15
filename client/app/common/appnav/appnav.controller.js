import * as firebase from 'firebase';

class AppnavController {
  constructor($translate,$firebaseObject,Firedbservice,AuthService,authManager) {
    'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
    this.translate = $translate;
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
  }
  $onInit() {
    this.name = 'appnav';
  }
}

export default AppnavController;
