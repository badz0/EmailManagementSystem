class ValidationService {
  checkValidation(form) {
    this.checkItem(form.group);
    this.checkItem(form.subject);
    this.checkEmail(form.email);
  }
  checkItem(item) {
    if (item.$viewValue) {
      item.$setValidity('required', true);
      if (item.$viewValue.length < 20) {
        item.$setValidity('tooLong', true);
      }
      else item.$setValidity('tooLong', false);
    }
    else item.$setValidity('required', false);
  }
  checkEmail(item) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (item.$viewValue) {
      item.$setValidity('required', true);

      if(pattern.test(item.$viewValue)) {
        item.$setValidity('email', true);
      }
      else item.$setValidity('email', false);

    }
    else item.$setValidity('required', false);
  }
}

export default ValidationService;

