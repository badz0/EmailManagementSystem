class AuthRun {
  constructor($rootScope, authService, lock){
     "ngInject";
	$rootScope.authService = authService;

    authService.registerAuthenticationListener();

    lock.interceptHash();

  }
}

export default AuthRun;
