import validationSevice from './validation.service';

describe('Validation service', () => {
  let service;
  let form = {
    email: {},
    group: {},
    subject: {}
  };
  let formField = {
    $name: 'email',
    $viewValue: 'bbbb@gmail.com',
    $isEmpty: () => {},
    $setValidity: () => {},
  };

  beforeEach(() => {
    service = new validationSevice();
    spyOn(service, 'checkItem').and.callThrough();
    spyOn(formField, '$isEmpty').and.callFake((val) => {
      return val ? false : true;
    });
    spyOn(formField, '$setValidity');
  });

  it('Check if checkValidation method calls checkItem for all fields', () => {
    service.checkItem.and.stub();
    service.checkValidation(form);
    expect(service.checkItem.calls.count()).toEqual(3);
  });

  it('Checking email validity with valid email', () => {
    service.checkItem(formField);
    expect(formField.$setValidity.calls.count()).toEqual(2);
    expect(formField.$setValidity).toHaveBeenCalledWith('required', true);
    expect(formField.$setValidity).toHaveBeenCalledWith('email', true);
  });

  it('Checking email validity with invalid email', () => {
    formField.$viewValue = 'bbb'
    service.checkItem(formField);
    expect(formField.$setValidity).toHaveBeenCalledWith('required', true);
    expect(formField.$setValidity).toHaveBeenCalledWith('email', false);
  });

  it('Checking empty field validity', () => {
    formField.$viewValue = '';
    service.checkItem(formField);
    expect(formField.$setValidity).toHaveBeenCalledWith('required', false);
  });

  it('Checking validity with too long input', () => {
    formField.$name = 'group';
    formField.$viewValue = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb';
    service.checkItem(formField);
    expect(formField.$setValidity).toHaveBeenCalledWith('required', true);
    expect(formField.$setValidity).toHaveBeenCalledWith('tooLong', false);
  });

  it('Checking subject or group validity', () => {
    formField.$name = 'group';
    formField.$viewValue = 'bbbb';
    service.checkItem(formField);
    expect(formField.$setValidity.calls.count()).toEqual(2);
    expect(formField.$setValidity).toHaveBeenCalledWith('required', true);
    expect(formField.$setValidity).toHaveBeenCalledWith('tooLong', true);
  });
});

