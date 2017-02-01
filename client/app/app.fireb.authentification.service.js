import * as firebase from 'firebase';
class FiredbAutorisationService {
  constructor($firebaseObject,Firedbservice) {'ngInject';
    this.ref = firebase.database().ref();
    this.res = $firebaseObject(this.ref);
    this.$firebaseObject=$firebaseObject;
  };
  responseData() {
    return this.res.$loaded().then(res => {
      return {
        color: this.getColor(res),
        userData: this.userData(res)
      };
    });
  };
  getColor(res) {
    return res.user[9].themeColor;
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

  getUserDetails() {
    return this.$firebaseObject(firebase.database().ref().child('user'));
  }
}
export default FiredbAutorisationService;
