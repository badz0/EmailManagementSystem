import Constants from './addEmail.constants';

class ValidationService {
  checkValidation(form) {
    for (let item in form) {
      if (!item.includes('$')) this.checkItem(form[item]);
    }
  }
  checkItem(item) {
    const isInput = !item.$isEmpty(item.$viewValue);

    item.$setValidity('required', isInput);
    if (isInput) {
      if (item.$name === 'email') item.$setValidity('email', Constants.emailRegExp.test(item.$viewValue));

      else item.$setValidity('tooLong', item.$viewValue.length <= Constants.maxLength);
    }
  }
}

export default ValidationService;

