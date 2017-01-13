class AuthController {
  constructor(AuthService) {
  	"ngInject";
    this.name = 'auth';
    AuthService.login()
  }
}

export default AuthController;
