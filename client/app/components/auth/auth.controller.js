class AuthController {
  constructor(AuthService,authManager) {
  	"ngInject";
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
  }
}

export default AuthController;
