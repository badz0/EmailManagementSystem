import countries from './cabinet.countries.json';
//import * as firebase from "firebase";

//const config = {
//    apiKey: "AIzaSyCb8jsyphSzLsYoEomj7wDU8qe_x0qLRh8",
//    authDomain: "userdata-c51ae.firebaseapp.com",
//    databaseURL: "https://userdata-c51ae.firebaseio.com",
 //   storageBucket: "userdata-c51ae.appspot.com",
 //   messagingSenderId: "359501986247"
//  };
//  firebase.initializeApp(config);
  
class CabinetController {
 // constructor($firebaseArray) {"ngInject";
 //   this.user = $firebaseArray(firebase.database().ref());
//  }
  $onInit () {
    this.name = 'cabinet';
    this.countries=countries;
  }
  submitForm(user) {
      angular.extend(this.user[1],user);
  }
}

export default CabinetController;
