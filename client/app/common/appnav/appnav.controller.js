import * as firebase from 'firebase';

class AppnavController {
  constructor($firebaseObject, Firedbservice, AuthService, authManager) {
    'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
  }
}

export default AppnavController;
