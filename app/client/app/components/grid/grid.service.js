import * as firebase from 'firebase';

class EmailDetailService {
  constructor(FiredbAutorisation) {
    'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.res=res.userData.index;
      this.list = this.FiredbAutorisation.getUserEmails(this.res);
    });
  }
  getList() {
    return this.list.$loaded(
      (list) => {
        return list;
      },
      (error) => {
        console.log('Error:', error);
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