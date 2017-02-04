import * as firebase from 'firebase';
class FiredbAutorisationService {
  constructor($firebaseObject, $firebaseArray, Firedbservice) {'ngInject';
    this.ref = firebase.database().ref();
    this.res = $firebaseObject(this.ref);
    this.$firebaseObject=$firebaseObject;
    this.$firebaseArray=$firebaseArray;
  };

  responseData() {
    return this.res.$loaded().then(res => {
      return {
        color: this.getColor(res),
        userData: this.userData(res)
      };
    });
  }
  getColor(res) {
    return res.user[9].themeColor;
  }
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
  getUserDetails() {
    return this.$firebaseObject(firebase.database().ref().child('user'));
  }
  getUserData(a){
    return this.$firebaseObject(firebase.database().ref().child(`user/${a}`));
  }
  updateUser(a,b){
    firebase.database().ref().child(`user/${a}`).update(b);
  }
  deleteUserAvatar(a,b){
    firebase.storage().ref().child(`user${a}/${b}`).delete();
  }
}
export default FiredbAutorisationService;
