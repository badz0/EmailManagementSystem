import * as firebase from 'firebase';

class AuthService {
  constructor($q, lock, authManager, Firedbservice, $firebaseArray, $state){
    'ngInject';
    const ref = firebase.database().ref().child('user');
    this.data = $firebaseArray(ref);
    this.q = $q;
    this.lock=lock;
    this.authManager=authManager;
    this.deferredProfile = $q.defer();
    this.state = $state;
  }
  login() {
    var lock = new Auth0Lock('YWiJP0aecm768DSElJl8YhqtIbAgx7gm', 'nerosman.eu.auth0.com');
    lock.show();
  }
  logout() {
    window.localStorage.removeItem('id_token');
    this.authManager.unauthenticate();
    firebase.auth().signOut().then(function() {
      firebase.database().ref('stories').remove();
    }, function(error) {
      console.log(error);
    });
    this.state.go('home');
  }
  registerAuthenticationListener() {
    this.lock.on('authenticated', authResult => {
      window.localStorage.setItem('id_token', authResult.idToken);
      this.authManager.authenticate();
      this.lock.getUserInfo(authResult.accessToken ,(error, profile)=> {
        if (error) {
          return console.log(error);
        }
        if(profile) {
          firebase.database().ref('stories').remove();
          firebase.database().ref('stories').push(profile);
        }
        window.localStorage.setItem('profile', JSON.stringify(profile));
        this.deferredProfile.resolve(profile);
      });
    });
  }
  isAuthenticated() {
    return this.authManager.isAuthenticated();
  }
  getProfileDeferred() {
    return this.deferredProfile.promise;
  }
}
export default AuthService;
