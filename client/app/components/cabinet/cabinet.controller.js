import countries from './cabinet.countries.json';
import * as firebase from "firebase";


class CabinetController {
    constructor($firebaseObject) {"ngInject";
    const ref = firebase.database().ref().child('user');
    this.user = $firebaseObject(ref);
  }
  $onInit () {
    this.name = 'cabinet';
    this.countries=countries;
  }
  submitForm(user) {
      user.country=user.country.country||'';
      angular.extend(this.user[9],user);
      firebase.database().ref().child('user/9').update(this.user[9]);
  }
}

export default CabinetController;
