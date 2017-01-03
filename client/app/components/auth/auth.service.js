class AuthService {
  constructor(lock, authManager){
  "ngInject"
    function login() {
      lock.show();
    }
    function registerAuthenticationListener() {
      lock.on('authenticated', authResult => {
        localStorage.setItem('id_token', authResult.idToken);
        authManager.authenticate();
      });
    }

    return {
      login,
      registerAuthenticationListener
    }
  }
}
export default AuthService;
