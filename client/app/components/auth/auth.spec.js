import authModule from './auth'
import AuthController from './auth.controller'
import authComponent from './auth.component'
import AuthService from './auth.service'
import AuthRun from './auth.run'
import * as firebase from 'firebase'

describe('Auth', () => {

  beforeEach(angular.mock.module(authModule));
  let $rootScope, $state, $location;
  let state = 'auth';
  beforeEach(inject(($injector) => {
      $rootScope = $injector.get('$rootScope');
      $state = $injector.get('$state');
      $location = $injector.get('$location');
  }));

  describe('Module', () => {
    it('default component should be auth', () => {
      $location.url('/auth');
      $rootScope.$digest();
      expect($state.current.component).toEqual('auth');
    });
    it('should activate the state', function() {
      $state.go(state);
      $rootScope.$digest();
      expect($state.current.name).toBe(state);
    });
  });

  describe('Component', () => {
    let component = authComponent;
    it('invokes the right controller', () => {
      expect(component.controller).toEqual(AuthController);
    });
    it('constructor shoud be defined', ()=>{
      expect(component.constructor).toBeDefined();
    });
  });

  describe('Controller', () => {
    let scope, AuthService, controller;
    beforeEach(inject(($injector, $controller, $q) => {

      AuthService = jasmine.createSpyObj('AuthService', ['registerAuthenticationListener', 'getProfileDeferred']);

      AuthService.getProfileDeferred = () => {};

      scope = $injector.get('$rootScope').$new();
      controller = $controller(AuthController, {
        $scope: scope,
        AuthService: AuthService,
      });
      scope.$digest();
    }));

    it('Сheck if authListener was called', () => {
      expect(AuthService.registerAuthenticationListener).toHaveBeenCalled();
    });
    it('Сheck if authListener was called only one time', () => {
      expect(AuthService.registerAuthenticationListener.calls.count()).toBe(1);
    });
    it('constructor shoud be defined', () => {
      expect(controller.constructor).toBeDefined();
    });
  });

  describe('Run', () => {
    let run = AuthRun;
    it('should have a name property', () => {
      expect(run.name).toEqual('AuthRun');  
    });
    it('constructor shoud be defined', () => {
      expect(run.constructor).toBeDefined();
    });
  });

  describe('Service', () => {
    let aService, lock, authManager, FiredbAutorisation, authResult;
    beforeEach(inject(($q, $state) => {
      FiredbAutorisation = jasmine.createSpyObj('FiredbAutorisation', ['getUserDetailsArr']);
      aService = new AuthService($q, lock, authManager, FiredbAutorisation, $state, authResult);
    }));
    it('constructor shoud be defined', () => {
      expect(aService.constructor).toBeDefined();
    });
    it('check if FiredbAutorisation was called', () => {
      expect(FiredbAutorisation.getUserDetailsArr).toHaveBeenCalled();
    });
    it('check if FiredbAutorisation was called only one time', () => {
      expect(FiredbAutorisation.getUserDetailsArr.calls.count()).toBe(1);
    });
  });

});
