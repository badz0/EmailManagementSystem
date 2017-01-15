class EmailController {
<<<<<<< HEAD
  constructor(EmailDetailService, $stateParams, $log) {
=======
  constructor(EmailDetailService, $stateParams) {
>>>>>>> develop
    'ngInject';
    this.idParam = parseInt($stateParams.id);
    this.EmailDetailService = EmailDetailService.getList();
  }
  $onInit() {
    this.name = 'Hello dynamic routes';
    this.EmailDetailService.then((res) => {
      this.currentData = res.find((value) => {
        return value.id === this.idParam;
      });
    }, (e) => {
<<<<<<< HEAD
      $log.error(e);
=======
      console.error(e);
>>>>>>> develop
    });
  }
}

export default EmailController;
