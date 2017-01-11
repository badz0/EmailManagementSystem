class AppheaderController {
  constructor($mdSidenav, $translate) {
    'ngInject';
    this.mdSidenav = $mdSidenav;
    this.translate = $translate;
  }

  $onInit() {
    this.lan = this.translate.use();
  }

  toggleMenu() {
    this.mdSidenav('menu').toggle();
  }

  changeLanguage(key) {
    this.translate.use(key);
    this.lan = key;
  }
}

export default AppheaderController;
