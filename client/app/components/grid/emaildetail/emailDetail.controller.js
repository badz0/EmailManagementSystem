import * as firebase from 'firebase';
class EmailController {
  constructor(EmailDetailService, $stateParams, $log) {
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
      angular.$log(e);
    });
  };
  deleteUser() {
    if (confirm('Are you sure you want to delete letter ?')){
      firebase.database().ref().child(`user/${this.idParam}`).remove();
    }};
}
export default EmailController;