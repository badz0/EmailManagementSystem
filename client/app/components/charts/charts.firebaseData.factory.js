import * as firebase from 'firebase';

function chartsFirebaseDataFactory($firebaseObject) {'ngInject';

  const ref = firebase.database().ref();
  const user = $firebaseObject(ref.child('user'));
  const email = $firebaseObject(ref.child('email'));
  const multy = $firebaseObject(ref.child('charts').child('Multuple'));

  return {
    lineChart() {
      return user.$loaded().then((response) => {
        let arr = [];
        user.forEach((val) => {
          arr.push({ provider: val.name, letters: val.listOfEmails.length });
        });
        return arr;
      });
    },
    pieChart() {
      return email.$loaded().then((response) => {
        let arr = [];
        email.forEach((val) => {
          arr.push({Group: val.group, letters: val.id});
        });
        return arr;
      });
    },
    columnChart() {
      return email.$loaded().then((response) => {
        let arr = [];
        email.forEach((val) => {
          arr.push({'date': val.date, 'value': val.id});
        });
        return arr;
      });
    },
    multipleChart() {
      return multy.$loaded().then((response) => {
        let arr = [];
        multy.forEach((val) => {
          arr.push({'date': val.date, 'Vlad': val.Vlad, 'Styopa': val.Styopa, 'Andy': val.Andy});
        });
        return arr;
      });
    }
  };
};

export default chartsFirebaseDataFactory;
