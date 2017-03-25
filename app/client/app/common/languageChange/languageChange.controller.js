class LanguageChangeController {
  constructor($translate) {
    'ngInject';
    this.translate = $translate;
  }

  $onInit() {
    this.lan = this.translate.use();
  }

  changeLanguage(key) {
    this.translate.use(key);
    this.lan = key;
  }
}

export default LanguageChangeController;
