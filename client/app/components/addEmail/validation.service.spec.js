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
    spyOn(formField, '$isEmpty').and.returnValue(false);
    spyOn(formField, '$setValidity');
  });

  it('Check if checkValidation method calls checkItem for all fields', () => {
    service.checkItem.and.stub();
    service.checkValidation(form);
    expect(service.checkItem.calls.count()).toEqual(3);
  });

  it('Checking email validity', () => {
    service.checkItem(formField);
    expect(formField.$setValidity.calls.count()).toEqual(2);
    expect(formField.$setValidity).toHaveBeenCalledWith('required', true);
    expect(formField.$setValidity).toHaveBeenCalledWith('email', true);
  });

  it('Checking subject or group validity', () => {
    formField.$name = 'group';
    service.checkItem(formField);
    expect(formField.$setValidity.calls.count()).toEqual(2);
    expect(formField.$setValidity).toHaveBeenCalledWith('required', true);
    expect(formField.$setValidity).toHaveBeenCalledWith('tooLong', true);
  });
});

