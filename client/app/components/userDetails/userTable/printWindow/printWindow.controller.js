import * as firebase from 'firebase';
class PrintWindowController {
  constructor(Firedbservice, $firebaseObject,$mdDialog) {
    'ngInject';
    this.mdDialog = $mdDialog;
    const ref_color = firebase.database().ref().child('user/9');
    this.user = $firebaseObject(ref_color); 
  }
  cancel() {
    this.mdDialog.cancel();
  }
}
export default PrintWindowController;