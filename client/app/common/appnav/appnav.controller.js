class AppnavController {
  constructor(Firedbservice, AuthService, FiredbAutorisation, authManager) {
    'ngInject';
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.usersData = res.userData;
      this.color = res.userData.themeColor;
    });
  }
}

export default AppnavController;
