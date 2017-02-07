class AppheaderController {
  constructor($mdSidenav, AuthService, FiredbAutorisation) {
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
