import * as firebase from "firebase";

class FirebaseConfig {
  constructor($firebaseObject) {'ngInject';
    const config = {
    apiKey: "AIzaSyAzhH5UdC8XMg61NiZTjtcN-xkeiwc346Y",
    authDomain: "amcharts-17823.firebaseapp.com",
    databaseURL: "https://amcharts-17823.firebaseio.com",
    storageBucket: "amcharts-17823.appspot.com",
    messagingSenderId: "588428047977"
  };
  firebase.initializeApp(config);
  }
}

export default FirebaseConfig;

