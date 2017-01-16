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
  getAds() {
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    let adsWords = /SALE|free/i;
    let ads = [];
    this.adsEmails = ads;
    ref.on('child_added', (snapshot) => {
      (adsWords.test(snapshot.val().content) === true) ? ads.push(snapshot.val()): 'error';
    });
    return this.adsEmails;
  }
  getSocial() {
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    let socialWords = /facebook|twitter|youtube|linkedin/i;
    let social = [];
    this.socialEmails = social;
    ref.on('child_added', (snapshot) => {
      (socialWords.test(snapshot.val().recipient) === true) ? social.push(snapshot.val()): 'error';
    });
    return this.socialEmails;
  }
}
export default EmailDetailService;
