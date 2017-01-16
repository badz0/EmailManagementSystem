import * as firebase from 'firebase';

class AppnavController {
  constructor($firebaseObject, Firedbservice) {
    'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
  }
}

export default AppnavController;
