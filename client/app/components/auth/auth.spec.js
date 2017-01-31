import authModule from './auth'
import AuthController from './auth.controller'
import authComponent from './auth.component'
import AuthService from './auth.service'
import AuthRun from './auth.run'
import * as firebase from 'firebase'

describe('Auth', () => {

  beforeEach(angular.mock.module(authModule));

  describe('Component', () => {
    let component = authComponent;
    it('SSSinvokes the right controller', () => {
      expect(component.controller).toEqual(AuthController);
    });
  });

  describe('Controller', () => {
    let controller = AuthController;
    it('should have a name property', ()=>{
      expect(controller.name).toEqual('AuthController'); 
    });
  });

  describe('Service', () => {
    let aService, lock, authManager, FiredbAutorisation, localStorage, lockProvider;
    beforeEach(inject(($q, $state) => {
      lock = jasmine.createSpyObj('lock', ['on', 'show', 'getUserInfo', 'interceptHash']);
      authManager = jasmine.createSpyObj('authManager', ['unauthenticate', 'authenticate', 'isAuthenticated', 'checkAuthOnRefresh']);
      FiredbAutorisation = jasmine.createSpyObj('FiredbAutorisation', ['getUserDetailsArr']);
      localStorage = jasmine.createSpyObj('localStorage', ['removeItem', 'setItem']);
      lockProvider = jasmine.createSpyObj('lockProvider', ['init']);
      aService = new AuthService($q, lock, authManager, FiredbAutorisation, $state);
    }));
    it('have 5 function', () => {
      expect(aService.login).toBeDefined();
      expect(aService.logout).toBeDefined();
      expect(aService.registerAuthenticationListener).toBeDefined();
      expect(aService.isAuthenticated).toBeDefined();
      expect(aService.getProfileDeferred).toBeDefined();
    });
    it('Сheck if FiredbAutorisation was called', () => {
      expect(FiredbAutorisation.getUserDetailsArr).toHaveBeenCalled();
    });
    it('Can get clientID and domain from Auth0 client', ()=> {
      expect(Auth0Lock).toBeDefined();
    });
    it('Can show plugin', () => {
      expect(lock.show).toBeDefined();
    });
    it('Can authenficated', () => {
      expect(lock.on).toBeDefined();
    });
    it('Can get users info', () => {
      expect(lock.getUserInfo).toBeDefined();
    });
    it('Run function lock.interceptHash', () => {
      expect(lock.interceptHash).toBeDefined();
    });
    it('isAuthenticated = true', () => {
      authManager.isAuthenticated=true;
      expect(authManager.isAuthenticated).toBeTruthy();
    });
    it('isAuthenticated = false', () => {
      authManager.isAuthenticated=false;
      expect(authManager.isAuthenticated).toBeFalsy();
    });
    it('isUnAuthenticated?', () => {
      expect(authManager.unauthenticate).toBeDefined();
    });
    it('have Authenticated function?', () => {
      expect(authManager.authenticate).toBeDefined();
    });
    it('can handle session on refresh', () => {
      expect(authManager.checkAuthOnRefresh).toBeDefined();
    });
    it('can work with local storage', () => {
      expect(localStorage.removeItem).toBeDefined();
      expect(localStorage.setItem).toBeDefined();
    });
    it('can init', () => {
      expect(lockProvider.init).toBeDefined();
    });
  });
});