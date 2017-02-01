import appheaderController from './appheader.controller';

describe('App Header', () => {

  describe('Controller', () => {
    let scope, controller, AuthService;
    let FiredbAutorisation = {};
    let toggle = { toggle: () => {} };
    let mdSidenav = () => { return toggle };

    beforeEach(inject(($injector, $controller, $q) => {
      AuthService = jasmine.createSpyObj('AuthService', ['registerAuthenticationListener']);

      FiredbAutorisation.responseData = () => {};

      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'userData'});
        return defer.promise;
      });

      spyOn(toggle, 'toggle');
      scope = $injector.get('$rootScope').$new();
      controller = $controller(appheaderController, {
        $scope: scope,
        $mdSidenav: mdSidenav,
        AuthService: AuthService,
        FiredbAutorisation: FiredbAutorisation
      });
      scope.$digest();
    }));

    it('Check if method toggleMenu was called', ()=> {
      controller.toggleMenu();
      expect(toggle.toggle).toHaveBeenCalled();
    });

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
