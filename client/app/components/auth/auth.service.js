class AuthService {
  constructor($q, lock, authManager){
  "ngInject";
  this.q = $q;
  this.lock=lock;
  this.authManager=authManager;
  this.deferredProfile = $q.defer();
  }
   login() {
    this.lock.show();
  }
   logout() {
      window.localStorage.removeItem('id_token');
      this.authManager.unauthenticate();
      window.location.href="https://newname-tigrarion.c9users.io/";
    }
  registerAuthenticationListener() {
    this.lock.on('authenticated', authResult => {
      window.localStorage.setItem('id_token', authResult.idToken);
      this.authManager.authenticate();
        this.lock.getUserInfo(authResult.accessToken ,(error, profile)=> {
          if (error) {
            return console.log(error);
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
