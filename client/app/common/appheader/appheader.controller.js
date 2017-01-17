class AppheaderController {
  constructor($mdSidenav, $translate,Firedbservice,AuthService,authManager, FiredbAutorisation) {
    'ngInject';
    this.mdSidenav = $mdSidenav;
    this.translate = $translate;
    this.AuthService = AuthService;
    this.AuthService.registerAuthenticationListener();
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
  }
  $onInit() {
    this.lan = this.translate.use();
  }
  toggleMenu() {
    this.mdSidenav('menu').toggle();
  }
}

export default AppheaderController;
