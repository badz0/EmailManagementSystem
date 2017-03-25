import * as firebase from 'firebase';

class AuthService {
  constructor($q, lock, authManager, FiredbAutorisation, $state){
    'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.data = this.FiredbAutorisation.getUserDetailsArr();
    this.q = $q;
    this.lock=lock;
    this.authManager=authManager;
    this.state = $state;
    this.deferredProfile = $q.defer();
  }
  login() {
    const clientID = 'YWiJP0aecm768DSElJl8YhqtIbAgx7gm';
    const clientDomain = 'nerosman.eu.auth0.com';
    const lock = new Auth0Lock(clientID, clientDomain);
    lock.show();
  }
  logout() {
    window.localStorage.removeItem('id_token');
    this.authManager.unauthenticate();
    firebase.auth().signOut().then(() => {
      firebase.database().ref('stories').remove();
    }, error => {
      console.log(error);
    });
    this.state.go('home');
  }
  registerAuthenticationListener() {
    this.lock.on('authenticated', authResult => {
      window.localStorage.setItem('id_token', authResult.idToken);
      this.authManager.authenticate();
      this.lock.getUserInfo(authResult.accessToken ,(error, profile) => {
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
