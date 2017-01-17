class HomeController {
  constructor(Firedbservice, AuthService, FiredbAutorisation, authManager) {
    'ngInject';
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
      console.log(this.userData);
    })
  }
}

export default HomeController;
