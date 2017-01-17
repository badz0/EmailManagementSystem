class AppheaderController {
  constructor($mdSidenav, Firedbservice, AuthService, FiredbAutorisation, authManager) {
    'ngInject';
    this.mdSidenav = $mdSidenav;
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
  }

  toggleMenu() {
    this.mdSidenav('menu').toggle();
  }

}

export default AppheaderController;
