class AddDialogController {
  constructor($mdDialog, ValidationService, FiredbAutorisation) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.ValidationService = ValidationService;
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
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
    this.ValidationService.checkValidation(form);

    if (form.$valid) {
      this.mdDialog.hide(this.formData);
    }
  }
}

export default AddDialogController;
