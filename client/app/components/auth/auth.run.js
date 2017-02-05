class AuthRun {
  constructor(AuthService, lock,authManager){
    'ngInject';
    login();
    AuthService.registerAuthenticationListener();
    authManager.checkAuthOnRefresh();
    lock.interceptHash();
  }
}

export default AuthRun;
