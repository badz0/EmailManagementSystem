import * as firebase from 'firebase';

function chartsFirebaseDataFactory($firebaseObject) {'ngInject';
  const ref = firebase.database().ref();
  const data = $firebaseObject(ref);
  return data.$loaded().then((response) => {
    return response;
  });
};

export default chartsFirebaseDataFactory;
