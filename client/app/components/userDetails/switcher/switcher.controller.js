import * as firebase from 'firebase';
class SwitcherController {
  constructor($firebaseObject, Firedbservice) {
    'ngInject';
    const ref = firebase.database().ref().child('user/9');
    this.user = $firebaseObject(ref);
      
  }

  setState(state){
    this.onStateChange({state: state});
  };

  }

export default SwitcherController;  
  