import * as firebase from 'firebase';

class FiredbAutorisationService {
  constructor($firebaseObject, Firedbservice) {'ngInject';
    this.ref = firebase.database().ref();
    this.res = $firebaseObject(this.ref);
    this.$firebaseObject=$firebaseObject;
  };
  responseData() {
    return this.res.$loaded()
      .then(response => {
        return {
          userData: this.userData(response),
          fireDBResponseData: this.fireDBResponseData()
        };
      });
  };
  userData(response) {
    let data = {};
    this.ref.on('value', snap => {
      snap.val().user.forEach((eachUser, index) => {
        for(let key in snap.val().stories) {
          if(snap.val().stories[key].userId === eachUser.id) {
            eachUser.index = index;
            Object.assign(data, eachUser);
          }
        }
      });
    });
    return data;
  };
  fireDBResponseData() {
    return this.res;
  };
  getUserData(a){
    return this.$firebaseObject(firebase.database().ref().child(`user/${a}`));
  };
  updateUser(a,b){
    firebase.database().ref().child(`user/${a}`).update(b);
  };
  deleteUserAvatar(a,b){
    firebase.storage().ref().child(`user${a}/${b}`).delete();
  };
  getUserDetails() {
    return this.$firebaseObject(firebase.database().ref().child('user'));
  };
}
export default FiredbAutorisationService;
