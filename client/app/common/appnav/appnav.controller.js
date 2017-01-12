class AppnavController {
<<<<<<< HEAD
  $onInit() {
    this.name = 'appnav';
=======
  constructor() {
    'ngInject';
   // this.translate = $translate;
  }

  $onInit() {
   // this.lan = this.translate.use();
  }

  changeLanguage(key) {
 //   this.translate.use(key);
    this.lan = key;
>>>>>>> d7612ae9a59598615aa9b14a6c062a31a07fdc07
  }
}

export default AppnavController;
