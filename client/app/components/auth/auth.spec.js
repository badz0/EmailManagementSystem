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

  describe('Service', () => {
    let aService, lock, authManager, FiredbAutorisation;
    beforeEach(inject(($q, $state) => {
      lock = jasmine.createSpyObj('lock', ['on', 'show', 'getUserInfo']);
      authManager = jasmine.createSpyObj('authManager', ['unauthenticate', 'authenticate', 'isAuthenticated']);
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
    it('Сheck if FiredbAutorisation was called', () => {
      expect(FiredbAutorisation.getUserDetailsArr).toHaveBeenCalled();
    });
    it('Can show plugin', () => {
      expect(lock.show).toBeDefined();
    });
    it('Can get clientID and domain from Auth0 client', ()=> {
      expect(Auth0Lock).toBeDefined();
    });
    it('Can authenficated', () => {
      expect(lock.on).toBeDefined();
    });
    it('Can get users info', () => {
      expect(lock.getUserInfo).toBeDefined();
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
  });
});