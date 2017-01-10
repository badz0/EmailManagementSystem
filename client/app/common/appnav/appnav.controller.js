import * as firebase from 'firebase';

class AppnavController {
  constructor($translate,$firebaseObject,Firedbservice) {
    'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
    this.translate = $translate;
  }

  $onInit() {
    this.lan = this.translate.use();
  }

  changeLanguage(key) {
    this.translate.use(key);
    this.lan = key;
  }
}

export default AppnavController;
