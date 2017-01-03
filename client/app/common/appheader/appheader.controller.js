class AppheaderController {
  constructor($translate) {
    "ngInject";
    this.lan = $translate.use();
    this.changeLanguage = changeLanguage;

    function changeLanguage(key) {
      $translate.use(key);
      this.lan = key;
    };
  };

  $onInit () {
    this.name = 'appheader';
  };
}

export default AppheaderController;
