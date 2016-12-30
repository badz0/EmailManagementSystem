import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCMAlozS1b77OGLgo7nSSELNApp5UmaPiw",
    authDomain: "emailmanagementsystem-d4f11.firebaseapp.com",
    databaseURL: "https://emailmanagementsystem-d4f11.firebaseio.com",
    storageBucket: "emailmanagementsystem-d4f11.appspot.com",
    messagingSenderId: "336389275919"
   };
firebase.initializeApp(config);

class firedbController {
  constructor($firebaseObject) {"ngInject";
    const ref = firebase.database().ref().child('email');
    this.name = 'Hello from Firebase';
    this.data = $firebaseObject(ref);
    console.log(this.data);
  }
}
export default firedbController;