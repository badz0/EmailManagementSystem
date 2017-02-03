import addDialogController from './addDialog.controller';

describe('Add email dialog', () => {

  describe('Checking Controller', () => {
    let controller, scope, mdDialog, ValidationService;
    let FiredbAutorisation = {};

    beforeEach(inject(($injector, $controller, $q) => {
      mdDialog = jasmine.createSpyObj('$mdDialog', ['cancel', 'hide']);
      ValidationService = jasmine.createSpyObj('ValidationService', ['checkValidation']);

      FiredbAutorisation.responseData = () => {};
      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'userData'});
        return defer.promise;
      });

      scope = $injector.get('$rootScope').$new();
      controller = $controller(addDialogController, {
        $scope: scope,
        $mdDialog: mdDialog,
        ValidationService: ValidationService,
        FiredbAutorisation: FiredbAutorisation
      });
      scope.$digest();
      controller.$onInit();
    }));

    it('Сheck if FiredbAutorisation was called', () => {
      expect(FiredbAutorisation.responseData).toHaveBeenCalled();
    });

    it('Check userData initialization', () => {
      expect(controller.userData).toBe('userData');
    });

    it('Initialization formData', () => {
      expect(controller.formData).toEqual({
        email: '',
        group: '',
        subject: ''
      });
    });

    it('Check if the mdDialog.cancel was called', () => {
      controller.cancel();
      expect(mdDialog.cancel).toHaveBeenCalled();
    });

    it('Check the submit method with valid form', () => {
      controller.submit({ $valid: true });
      expect(ValidationService.checkValidation).toHaveBeenCalledWith({ $valid: true });
      expect(mdDialog.hide).toHaveBeenCalledWith({
        email: '',
        group: '',
        subject: ''
      });
    });

    it('Check the submit method with invalid form', () => {
      controller.submit({ $valid: false });
      expect(ValidationService.checkValidation).toHaveBeenCalledWith({ $valid: false });
      expect(mdDialog.hide).not.toHaveBeenCalled();
    });
  });
});
