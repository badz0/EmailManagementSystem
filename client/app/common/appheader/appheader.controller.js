class AppheaderController {
  constructor($mdSidenav, Firedbservice, FiredbAutorisation, AuthService, authManager) {
    'ngInject';
    this.mdSidenav = $mdSidenav;
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.usersData = res.userData;
      this.color = res.userData.themeColor;
    });
  }

  toggleMenu() {
    this.mdSidenav('menu').toggle();
  }

}

export default AppheaderController;
