import * as firebase from 'firebase';
import templateDelete from '../confirmDialog/confirm.template.del.html';
import controller from '../confirmDialog/confirm.controller.js';
class EmailController {
  constructor(EmailDetailService, $stateParams, $log,  $mdDialog, $state,FiredbAutorisation) {
    'ngInject';
     this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
    this.idParam = parseInt($stateParams.id);
    this.EmailDetailService = EmailDetailService.getList();
    this.mdDialog = $mdDialog;
    this.state = $state;
  }
  $onInit() {
    this.EmailDetailService.then((res) => {
      this.currentData = res.find((value) => {
        return value.id === this.idParam;
      });
    }, (e) => {
      $log.error(e);
    });
  }
  deleteUser() {
    let template = templateDelete;
    let confirm = this.mdDialog.confirm({
      template,
      controller,
      controllerAs: '$ctrl', 
      clickOutsideToClose:true
    });
    this.mdDialog.show(confirm).then(() => {
      firebase.database().ref().child(`user/${this.res}`).child(`listOfEmails/${this.idParam-1}`).remove();
      this.state.go('grid');
    });
  }
}

export default EmailController;
