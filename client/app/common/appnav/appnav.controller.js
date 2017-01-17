import * as firebase from 'firebase';

class AppnavController {
  constructor($translate,$firebaseObject,Firedbservice,AuthService,authManager,FiredbAutorisation) {
    'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      const ref = firebase.database().ref().child(`user/${res.userData.index}`);
      this.users = $firebaseObject(ref);
    });
    this.translate = $translate;
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
  }
}

export default AppnavController;
