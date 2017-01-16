class PrintWindowController {
  constructor($mdDialog) {
    'ngInject';
    this.mdDialog = $mdDialog;
  }
  cancel() {
    this.mdDialog.cancel();
  }
}
export default PrintWindowController;