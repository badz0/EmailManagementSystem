import authModule from './auth'
import AuthController from './auth.controller'
import authComponent from './auth.component'
import AuthService from './auth.service'
import AuthRun from './auth.run'
import * as firebase from 'firebase'

describe('Auth', () => {

  beforeEach(angular.mock.module(authModule));
  let $rootScope, $state, $location;
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
  });

  describe('Component', () => {
    let component = authComponent;
    it('SSSinvokes the right controller', () => {
      expect(component.controller).toEqual(AuthController);
    });
    it('constructor shoud be defined', ()=>{
      expect(component.constructor).toBeDefined();
    });
  });

  describe('Controller', () => {
    let controller = AuthController;
    it('should have a name property', ()=>{
      expect(controller.name).toEqual('AuthController'); 
    });
    it('constructor shoud be defined', ()=>{
      expect(controller.constructor).toBeDefined();
    });
  });

  describe('Run', () => {
    let run = AuthRun;
    it('should have a name property', ()=>{
      expect(run.name).toEqual('AuthRun'); 
    });
    it('constructor shoud be defined', ()=>{
      expect(run.constructor).toBeDefined();
    });
  })

  describe('Service', () => {
    let aService, lock, authManager, FiredbAutorisation, localStorage, lockProvider;
    beforeEach(inject(($q, $state) => {
      FiredbAutorisation = jasmine.createSpyObj('FiredbAutorisation', ['getUserDetailsArr']);
      aService = new AuthService($q, lock, authManager, FiredbAutorisation, $state);
    }));
    it('have 5 function', () => {
      expect(aService.login).toBeDefined();
      expect(aService.logout).toBeDefined();
      expect(aService.registerAuthenticationListener).toBeDefined();
      expect(aService.isAuthenticated).toBeDefined();
      expect(aService.getProfileDeferred).toBeDefined();
    });
    it('constructor shoud be defined', ()=>{
      expect(aService.constructor).toBeDefined();
    });
    it('check if FiredbAutorisation was called', () => {
      expect(FiredbAutorisation.getUserDetailsArr).toHaveBeenCalled();
    });
    it('can get clientID and domain from Auth0 client', ()=> {
      expect(Auth0Lock).toBeDefined();
    });
  });
});