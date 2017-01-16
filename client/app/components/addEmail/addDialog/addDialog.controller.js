class AddDialogController {
  constructor($mdDialog, ValidationService) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.ValidationService = ValidationService;
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
  submit(form) {
    let valid = this.ValidationService.checkValidation(form);
    if(valid) {
      this.mdDialog.hide(this.formData);
    }
  }
}

export default AddDialogController;
