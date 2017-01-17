import * as firebase from 'firebase';

class HomeController {
  constructor($firebaseObject, Firedbservice,FiredbAutorisation) {
    'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      const ref = firebase.database().ref().child(`user/${res.userData.index}`);
      this.users = $firebaseObject(ref);
    });
  }
}

export default HomeController;
