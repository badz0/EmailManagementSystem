import addDialogController from './addDialog.controller';

describe('Add dialog', () => {

  describe('Controller', () => {
    let ctrl, mdDialog, ValidationService;
    beforeAll(() => {
      mdDialog = jasmine.createSpyObj('$mdDialog', ['cancel', 'hide']);
      ValidationService = jasmine.createSpyObj('ValidationService', ['checkValidation']);

      ctrl = new addDialogController(mdDialog, ValidationService);
    });

    it('Initialization formData', () => {
      ctrl.$onInit();
      expect(ctrl.formData).toEqual({
        email: '',
        group: '',
        subject: ''
      });
    });

    it('Check if the mdDialog.cancel was called', () => {
      ctrl.cancel();
      expect(mdDialog.cancel).toHaveBeenCalled();
    });

    it('Check the submit method', () => {
      ctrl.submit({ $valid: true });
      expect(ValidationService.checkValidation).toHaveBeenCalledWith({ $valid: true });
      expect(mdDialog.hide).toHaveBeenCalledWith({
        email: '',
        group: '',
        subject: ''
      });
    });
  });
});
