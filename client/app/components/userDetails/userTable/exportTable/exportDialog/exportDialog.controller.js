import * as firebase from 'firebase';

class ExportDialogController {
  constructor(FiredbAutorisation,$mdDialog) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
      
  }
  
  $onInit() {
    this.exportData = {
      column: '',
      row: '',
      format: ''
    };
  }  
    
  cancel() {
    this.mdDialog.cancel();
  }

  submit(form) {
    this.mdDialog.hide(this.exportData);
    
  }

}
export default ExportDialogController;