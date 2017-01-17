import * as firebase from 'firebase';

class EmailDetailService {
  constructor(Firedbservice, $firebaseArray, $log,FiredbAutorisation) {
    'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      const ref = firebase.database().ref().child(`user/${res.userData.index}`).child('listOfEmails');
      this.list = $firebaseArray(ref);
      this.res=res.userData.index;
    });
  }
  getList() {
    return this.list.$loaded(
      (list) => {
        return list;
      },
      (error) => {
        angular.$log('Error:', error);
      });
  }
  getSocial() {
    const ref = firebase.database().ref().child(`user/${this.res}`).child('listOfEmails');
    let socialWords = /facebook|twitter|youtube|linkedin/i;
    let social = [];
    ref.on('child_added', (snapshot) => {
      if (socialWords.test(snapshot.val().recipient)) {
        social.push(snapshot.val());
      }
    });
    return social;
  }
  getAds() {
    const ref = firebase.database().ref().child(`user/${this.res}`).child('listOfEmails');
    let adsWords = /SALE|free/i;
    let ads = [];
    ref.on('child_added', (snapshot) => {
      if (adsWords.test(snapshot.val().content)) {
        ads.push(snapshot.val());
      }
    });
    return ads;
  }
  getBlock() {
    const ref = firebase.database().ref().child(`user/${this.res}`).child('listOfEmails');
    let block = [];
    ref.on('child_added', (snapshot) => {
      if (!snapshot.val().isSafe) {
        block.push(snapshot.val());
      };
    });
    return block;
  }
  getEmail() {
    const ref = firebase.database().ref().child(`user/${this.res}`).child('listOfEmails');
    let adsWords = /SALE|free/i;
    let socialWords = /facebook|twitter|youtube|linkedin/i;
    let email = [];
    ref.on('child_added', (snapshot) => {
      if ((snapshot.val().isSafe) && (!adsWords.test(snapshot.val().content)) && (!socialWords.test(snapshot.val().recipient))) {
        email.push(snapshot.val());
      };
    });
    return email;
  }
}
export default EmailDetailService;