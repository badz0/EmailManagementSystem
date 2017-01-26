import GridModule from './grid'
import gridController from './grid.controller'
import EmailDetailService from './grid.service'

describe('Grid', () => {
    let $rootScope, $httpBackend, $state, $location, $controller, $componentController, $compile;
    beforeEach(angular.mock.module(GridModule));
    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
    }));
    describe('Module', () => {
        it('default component should be grid', () => {
            $location.url('/grid');
            $rootScope.$digest();
            expect($state.current.component).toEqual('grid');
        });
    });
    describe('Controller', () => {
    let scope, controller, firebaseObject, mdDialog, Firedbservice;
    let EmailDetailService = {};
    let FiredbAutorisation = {};
    
    beforeEach(inject(($injector, $controller, $q) => {
      EmailDetailService = jasmine.createSpyObj('EmailDetailService', ['getSocial', 'getAds', 'getBlock', 'getEmail']);
      Firedbservice = jasmine.createSpyObj('Firedbservice', ['getEmail']);
      firebaseObject = jasmine.createSpyObj('$firebaseObject', ['fbObject']);
      mdDialog = jasmine.createSpyObj('$mdDialog', ['mdDialog']);
      FiredbAutorisation.responseData = () => {};
      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'users'});
        return defer.promise;
      });
      scope = $injector.get('$rootScope').$new();
      controller = $controller(gridController, {
        $scope: scope,
        $firebaseObject: firebaseObject,
        $mdDialog: mdDialog,
        EmailDetailService: EmailDetailService,
        Firedbservice: Firedbservice,
        FiredbAutorisation: FiredbAutorisation
      });
      scope.$digest();
      }));
      
      it('Check allEmails initialization', () => {
        expect(controller.users).toBe('users');
      });
      
      it('Check if method allEmails defined', () => {
        expect(controller.allEmails).toBeDefined();;
      });
  });

});
