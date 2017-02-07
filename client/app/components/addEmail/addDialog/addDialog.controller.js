class AddDialogController {
  constructor($mdDialog, ValidationService, FiredbAutorisation, $filter) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.filter = $filter;
    this.ValidationService = ValidationService;
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
    this.formData = {
      recipient: '',
      group: '',
      subject: '',
      isSafe: true,
      date: ''
    };
  }
  cancel() {
    this.mdDialog.cancel();
  }
  submit(form) {
    this.ValidationService.checkValidation(form);

    if (form.$valid) {
      this.formData.date = this.filter('date')(new Date(), 'yyyy-MM-dd');
      this.mdDialog.hide(this.formData);
    }
  }
}

export default AddDialogController;
