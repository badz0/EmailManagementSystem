class ConfirmController {
  constructor($mdDialog) {
    'ngInject';
    this.mdDialog = $mdDialog;
  }
  confirmNo() {
    this.mdDialog.cancel();
  }
  confirmYes() {
    this.mdDialog.hide();
  }
}
export default ConfirmController;
