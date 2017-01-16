import * as firebase from 'firebase';

class HomeController {
  constructor($firebaseObject, Firedbservice) {
    'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
  }
}

export default HomeController;
