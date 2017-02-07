import exportTable from './exportTable';

describe('Export Table Component', () => {

  describe('Controller', () => {
    let scope, controller, componentController, getParam;
    let mdDialog = {};
    let FiredbAutorisation = {
      responseData: () => {}
    };

    beforeEach(angular.mock.module('exportTable'));
    beforeEach(inject(($injector, $controller, $q, $document) => {
      componentController = $injector.get('$componentController');

      mdDialog.show = () => {};
      spyOn(mdDialog, 'show').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve('Test data');
        return defer.promise;
      });

      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'userData'});
        return defer.promise;
      });

      getParam = jasmine.createSpy('getParam');
      scope = $injector.get('$rootScope').$new();
      controller = componentController('exportTable', {
        $scope: scope,
        $mdDialog: mdDialog,
        $document: $document,
        FiredbAutorisation: FiredbAutorisation
      }, {
        onSetParam: getParam
      });
      controller.showWindow();
      scope.$digest();
    }));

    it('expects that showWindow function has been called correctly', () => {
      expect(mdDialog.show).toHaveBeenCalled();
    });

    it('expects that onSetParam has been called with right param', () => {
      expect(getParam).toHaveBeenCalledWith({exportData: 'Test data'});
    });
  });
});
