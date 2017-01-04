import * as firebase from 'firebase';

class firedbController {
  constructor($firebaseObject, Firedbservice) {'ngInject';
    const ref = firebase.database().ref().child('email');
    this.name = 'Hello from Firebase';
    this.data = $firebaseObject(ref);}
}
export default firedbController;