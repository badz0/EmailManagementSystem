class AddDialogController {
  constructor($mdDialog) {
    'ngInject';
    this.mdDialog = $mdDialog;
  }
  $onInit() {
    this.formData = {
      email: '',
      group: '',
      subject: ''
    };
  }
  cancel() {
    this.mdDialog.cancel();
  }
  submit(valid) {
    if(valid) {
      this.mdDialog.hide(this.formData);
    }
  }
}

export default AddDialogController;
