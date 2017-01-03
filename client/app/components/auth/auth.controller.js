class AuthController {
  constructor(AuthService) {
  	"ngInject";
    this.name = 'auth';
    console.log(AuthService.login())
  }
}

export default AuthController;
