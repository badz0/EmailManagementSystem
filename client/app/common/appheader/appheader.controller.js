class AppheaderController {
  constructor($mdSidenav) {
    'ngInject';
    this.mdSidenav = $mdSidenav;
  }
  toggleMenu() {
    this.mdSidenav('menu').toggle();
  }
}

export default AppheaderController;
