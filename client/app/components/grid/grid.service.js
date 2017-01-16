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
  getSocial() {
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    let socialWords = /facebook|twitter|youtube|linkedin/i;
    let social = [];
    ref.on('child_added', (snapshot) => {
      if (socialWords.test(snapshot.val().recipient)){
        social.push(snapshot.val());
      }
    });
    return social;
  }
  getAds() {
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    let adsWords = /SALE|free/i;
    let ads = [];
    ref.on('child_added', (snapshot) => {
      if (adsWords.test(snapshot.val().content)){
        ads.push(snapshot.val());
      } 
    });
    return ads;
  }
}
export default EmailDetailService;
