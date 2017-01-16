class ValidationService {
  checkValidation(form) {
    console.log('yeeahh');
    console.log(form);
    form.email.$valid();
  }
}

export default ValidationService;

