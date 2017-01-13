class AuthRun {
  constructor($rootScope, AuthService, lock){
     "ngInject";
	$rootScope.AuthService = AuthService;

    authService.registerAuthenticationListener();

    lock.interceptHash();

  }
}

export default AuthRun;
