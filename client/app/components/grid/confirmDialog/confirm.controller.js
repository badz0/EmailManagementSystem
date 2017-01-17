class ConfirmController {
  constructor($mdDialog) {
    'ngInject';
    this.mdDialog = $mdDialog;
  }
  no() {
    this.mdDialog.cancel();
  }
  yes() {
    this.mdDialog.hide();
  }
}
export default ConfirmController;
