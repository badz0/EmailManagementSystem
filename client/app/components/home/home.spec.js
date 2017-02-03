import homeController from './home.controller';
import homeModule from './home';

describe('Home', () => {

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
      controller = $controller(homeController, {
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

  describe('Module', () => {
    let $rootScope, $state, $location;

    beforeEach(angular.mock.module(homeModule));

    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
    }));

    it('Default component should be home', () => {
      $location.url('/');
      $rootScope.$digest();
      expect($state.current.component).toEqual('home');
    });
  });
});
