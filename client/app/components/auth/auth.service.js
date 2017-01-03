class AuthService {
  constructor(lock, authManager){
  "ngInject" 
    function login() {
      lock.show();
    }
    function registerAuthenticationListener() {
      lock.on('authenticated', function (authResult) {
        localStorage.setItem('id_token', authResult.idToken);
        authManager.authenticate();
      });
    }

    return {
      login: login,
      registerAuthenticationListener: registerAuthenticationListener
    }
  }
}
export default AuthService;