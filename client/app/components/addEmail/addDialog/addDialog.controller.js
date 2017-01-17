class AddDialogController {
  constructor($mdDialog, ValidationService) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.ValidationService = ValidationService;
  }
  $onInit() {
    this.formData = {
      col: '',
      row: '',
      format: ''
    };
  }
  cancel() {
    this.mdDialog.cancel();
  }
  submit(form) {
    this.ValidationService.checkValidation(form);

    if (form.$valid) {
      this.mdDialog.hide(this.formData);
    }
  }
}

export default AddDialogController;
