import * as firebase from 'firebase';

class AppheaderController {
  constructor($mdSidenav, $firebaseObject, Firedbservice) {
    'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.users = $firebaseObject(ref);
    this.mdSidenav = $mdSidenav;
  }

  toggleMenu() {
    this.mdSidenav('menu').toggle();
  }

}

export default AppheaderController;
