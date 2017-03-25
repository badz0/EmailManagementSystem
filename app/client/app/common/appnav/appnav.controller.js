class AppnavController {
  constructor(AuthService, FiredbAutorisation) {
    'ngInject';
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
  }
}

export default AppnavController;
