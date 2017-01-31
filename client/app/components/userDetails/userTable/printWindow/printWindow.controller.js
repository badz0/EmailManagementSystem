import * as firebase from 'firebase';
class PrintWindowController {
  constructor($mdDialog,FiredbAutorisation) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
  }
  cancel() {
    this.mdDialog.cancel();
  }
}
export default PrintWindowController;