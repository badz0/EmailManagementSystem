import * as firebase from 'firebase';

class FiredbAutorisationService {
  constructor($firebaseObject, Firedbservice, $firebaseArray) {'ngInject';
    this.ref = firebase.database().ref();
    this.res = $firebaseObject(this.ref);
    this.$firebaseObject = $firebaseObject;
    this.$firebaseArray = $firebaseArray;
  };

  responseData() {
    return this.res.$loaded().then(res => {
      return {
        fireDBResponseData: this.fireDBResponseData(),
        userData: this.userData(res)
      };
    });
  };

  userData(res) {
    let data = {};
    this.ref.on('value', snap => {
      snap.val().user.filter((val, index) => {
        for(let key in snap.val().stories) {
          if(snap.val().stories[key].userId === val.id) {
            val.index = index;
            Object.assign(data, val);
          }
        }
      });
    });
    return data;
  };
  getUserEmails(a){
    return this.$firebaseArray(firebase.database().ref().child(`user/${a}`).child('listOfEmails'));
  }
  fireDBResponseData() {
    return this.res;
  };
  getUserDetails() {
    return this.$firebaseObject(firebase.database().ref().child('user'));
  };

  getUserDetailsArr() {
    return this.$firebaseArray(firebase.database().ref().child('user'));
  };

  getUserData(a){
    return this.$firebaseObject(firebase.database().ref().child(`user/${a}`));
  };
  
  getUserEmails(a){
    return this.$firebaseArray(firebase.database().ref().child(`user/${a}`).child('listOfEmails'));
  };
  
  updateUser(a,b){
    firebase.database().ref().child(`user/${a}`).update(b);
  };

  deleteUserAvatar(a,b){
    firebase.storage().ref().child(`user${a}/${b}`).delete();
  };
};
export default FiredbAutorisationService;
