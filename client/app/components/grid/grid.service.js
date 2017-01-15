import * as firebase from 'firebase';

class EmailDetailService {
  constructor(Firedbservice, $firebaseArray, $log) {
    'ngInject';
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    this.list = $firebaseArray(ref);
  }
  getList() {
    return this.list.$loaded(
      (list) => {
        return list;
      },
      (error) => {
        $log.error('Error:', error);
      });
  }
  getAdvertising() {
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    let advertisingWords = new RegExp("SALE|free");
    let advertising = [];
    this.advertisingEmails = advertising;
    ref.on('child_added', (snapshot) => {
      (advertisingWords.test(snapshot.val().content) === true) ? advertising.push(snapshot.val()): 'error';
    });
    return this.advertisingEmails;
  }
  getSocial() {
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    let socialWords = new RegExp("facebook|twitter|youtube|linkedin");
    let social = [];
    this.socialEmails = social;
    ref.on('child_added', (snapshot) => {
      (socialWords.test(snapshot.val().recipient) === true) ? social.push(snapshot.val()): 'error';
    });
    return this.socialEmails;
  }
}
export default EmailDetailService;
