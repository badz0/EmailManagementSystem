class AuthRun {
  constructor(AuthService, lock,authManager){
    'ngInject';

    AuthService.registerAuthenticationListener();
    authManager.checkAuthOnRefresh();
    lock.interceptHash();
  }
}

export default AuthRun;
