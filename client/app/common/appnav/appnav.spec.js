import appnavController from './appnav.controller';

describe('App Navigation', () => {

  describe('Controller', () => {
    let scope, controller, AuthService;
    let FiredbAutorisation = {};

    beforeEach(inject(($injector, $controller, $q) => {

      AuthService = jasmine.createSpyObj('AuthService', ['registerAuthenticationListener']);

      FiredbAutorisation.responseData = () => {};

      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'userData'});
        return defer.promise;
      });

      scope = $injector.get('$rootScope').$new();
      controller = $controller(appnavController, {
        $scope: scope,
        AuthService: AuthService,
        FiredbAutorisation: FiredbAutorisation
      });
      scope.$digest();
    }));


    it('Сheck if authListener was called', () => {
      expect(AuthService.registerAuthenticationListener).toHaveBeenCalled();
    });

    it('Сheck if FiredbAutorisation was called', () => {
      expect(FiredbAutorisation.responseData).toHaveBeenCalled();
    });

    it('Check userData initialization', () => {
      expect(controller.userData).toBe('userData');
    });
  });
});
