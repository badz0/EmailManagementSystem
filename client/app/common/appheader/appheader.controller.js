class AppheaderController {
  constructor($mdSidenav) {
    "ngInject";
    this.toggleMenu = toggleAppMenu;

    function toggleAppMenu() {
      $mdSidenav('menu').toggle();
    };
  };
  $onInit () {
    this.name = 'appheader';
  }
}

export default AppheaderController;
