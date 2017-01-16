import * as firebase from 'firebase';
class EmailController {
  constructor(EmailDetailService, $stateParams, $log,  $mdDialog) {
    'ngInject';
    this.idParam = parseInt($stateParams.id);
    this.EmailDetailService = EmailDetailService.getList();
    this.mdDialog = $mdDialog;
  }
  $onInit() {
    this.name = 'Hello dynamic routes';
    this.EmailDetailService.then((res) => {
      this.currentData = res.find((value) => {
        return value.id === this.idParam;
      });
    }, (e) => {
      $log.error(e);
    });
  }
  deleteUser() {
    let confirm = this.mdDialog.confirm()
      .title('Are you sure to delete the record?')
      .textContent('Record will be deleted permanently.')
      .ok('Yes')
      .cancel('No');
    this.mdDialog.show(confirm).then(() => {
      firebase.database().ref().child('user/0').child(`listOfEmails/${this.idParam-1}`).remove();
    });
  }
}

export default EmailController;
