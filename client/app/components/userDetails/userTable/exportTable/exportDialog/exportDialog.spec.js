import exportDialogController from './exportDialog.controller';

describe('Export dialog', () => {

  describe('Export Dialog Controller', () => {
    let controller, scope, mdDialog;
    let FiredbAutorisation = {};

    beforeEach(inject(($injector, $controller, $q) => {
      mdDialog = jasmine.createSpyObj('$mdDialog', ['cancel', 'hide']);
     
      FiredbAutorisation.responseData = () => {};
      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'userData'});
        return defer.promise;
      });

      scope = $injector.get('$rootScope').$new();
      controller = $controller(exportDialogController, {
        $scope: scope,
        $mdDialog: mdDialog,
        FiredbAutorisation: FiredbAutorisation
      });
      scope.$digest();
      controller.$onInit();
    }));

    it('expects that FiredbAutorisation has been called', () => {
      expect(FiredbAutorisation.responseData).toHaveBeenCalled();
    });

    it('expects that userData is correctly defined', () => {
      expect(controller.userData).toBe('userData');
    });

    it('expects that exportData is defined correctly', () => {
      expect(controller.exportData).toEqual({
        column: '',
        row: '',
        format: ''
      });
    });

    it('expects that mdDialog.cancel has been called', () => {
      controller.cancel();
      expect(mdDialog.cancel).toHaveBeenCalled();
    });

    it('expects that submit() method has been called correctly', () => {
      controller.submit();
      expect(mdDialog.hide).toHaveBeenCalledWith({
        column: '',
        row: '',
        format: ''
      });
    });

  });
});
