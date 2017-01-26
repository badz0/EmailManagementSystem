import addEmail from './addEmail';

describe('Add email component', () => {

  describe('Controller', () => {
    let scope, controller, componentController, getData;
    let mdDialog = {};
    beforeEach(angular.mock.module('addEmail'));
    beforeEach(inject(($injector, $controller, $q, $document) => {
      componentController = $injector.get('$componentController');
      mdDialog.show = () => {};

      spyOn(mdDialog, 'show').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve('Checking value');
        return defer.promise;
      });
      getData = jasmine.createSpy('getData')
      scope = $injector.get('$rootScope').$new();
      controller = componentController('addEmail', {
        $scope: scope,
        $mdDialog: mdDialog,
        $document: $document
      }, {
        returnData: getData
      });
      controller.openDialog();
      scope.$digest();
    }));

    it('Check if the openDialog function was called', () => {
      expect(mdDialog.show).toHaveBeenCalled();
    });
    it('Check if the parent function getData was called with right argument', () => {
      expect(getData).toHaveBeenCalledWith({data: 'Checking value'});
    });
  });
});
