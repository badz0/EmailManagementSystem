class AuthService {
  constructor(lock, authManager){
  "ngInject";
  this.lock=lock;
  this.authManager=authManager;
  }
   login() {
    this.lock.show();
  }
  registerAuthenticationListener() {
    this.lock.on('authenticated', authResult => {
      localStorage.setItem('id_token', authResult.idToken);
      this.authManager.authenticate();
    });
  }
}
export default AuthService;
