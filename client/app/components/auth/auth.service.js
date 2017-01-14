class AuthService {
  constructor(lock, authManager){
  "ngInject";
  this.lock=lock;
  this.authManager=authManager;
  debugger;
  }
   login() {
    this.lock.show();
  }
   logout() {
     console.log('logout');
      window.localStorage.removeItem('id_token');
      this.authManager.unauthenticate();
    }
  registerAuthenticationListener() {
    this.lock.on('authenticated', authResult => {
      window.localStorage.setItem('id_token', authResult.idToken);
      this.authManager.authenticate();
      debugger;
      console.log(this.authManager);
    });
  }
}
export default AuthService;
