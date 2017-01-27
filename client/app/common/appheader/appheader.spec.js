import appheaderController from './appheader.controller';

describe('App Header', () => {

  describe('Controller', () => {
    let scope, controller, mdSidenav, AuthService;
    let FiredbAutorisation = {};

    beforeEach(inject(($injector, $controller, $q) => {
      mdSidenav = jasmine.createSpyObj('$mdSidenav', ['toggle']);

      AuthService = jasmine.createSpyObj('AuthService', ['registerAuthenticationListener']);

      FiredbAutorisation.responseData = () => {};

      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'userData'});
        return defer.promise;
      });

      scope = $injector.get('$rootScope').$new();
      controller = $controller(appheaderController, {
        $scope: scope,
        $mdSidenav: mdSidenav,
        AuthService: AuthService,
        FiredbAutorisation: FiredbAutorisation
      });
      scope.$digest();
    }));

    it('Check if method toggleMenu is defined', ()=> {
      expect(controller.toggleMenu).toBeDefined();
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
