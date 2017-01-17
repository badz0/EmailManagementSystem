class HomeController {
  constructor(Firedbservice, AuthService, FiredbAutorisation, authManager) {
    'ngInject';
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    this.FiredbAutorisation = FiredbAutorisation;
    this.color = 'red';
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
  }
}

export default HomeController;
