import GridModule from './grid';
import gridComponent from './grid.component';
import gridController from './grid.controller';
import gridTemplate from './grid.html';


describe('Grid', () => {
  let $rootScope, $state, $location, $componentController, $compile, component;
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
    it('default template should be grid.html', () => {
      component = gridComponent;
      expect(component.template).toBe(gridTemplate);
    });
    it('default controller should be GridController', () => {
      component = gridComponent;
      expect(component.controller).toBe(gridController);
    });
  });
  describe('GridController', () => {
    let scope, controller, firebaseObject, Firedbservice, mdDialog,
      EmailDetailService = {},
      FiredbAutorisation = {};
    beforeEach(inject(($injector, $controller, $q) => {
      EmailDetailService = jasmine.createSpyObj('EmailDetailService', ['getSocial', 'getAds', 'getBlock', 'getEmail']);
      Firedbservice = jasmine.createSpyObj('Firedbservice', ['getEmail']);
      firebaseObject = jasmine.createSpyObj('$firebaseObject', ['fbObject']);
      FiredbAutorisation.responseData = () => {};
      spyOn(FiredbAutorisation, 'responseData').and.callFake(() => {
        let defer = $q.defer();
        defer.resolve({
          userData: 'users'
        });
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
      spyOn(controller, 'allEmails');
      spyOn(controller, 'emailEmails');
      spyOn(controller, 'socialEmails');
      spyOn(controller, 'blockEmails');
      spyOn(controller, 'adsEmails');
    }));
    it('Check users initialization', () => {
      expect(controller.users).toBe('users');
    });
    it('Check onInit initialization', () => {
      controller.$onInit();
      expect(controller.gridOptions.enableFiltering).toEqual(true);
      expect(controller.gridOptions.exporterMenuCsv).toEqual(false);
      expect(controller.gridOptions.enableGridMenu).toEqual(true);
      expect(controller.gridOptions.columnDefs).toEqual([{
        name: 'email',
        enableFiltering: false,
        enableSorting: false,
        enableHiding: false,
        cellTemplate: '<a class="cell-template-ref" ui-sref="email({ id: row.entity.id })">{{row.entity.recipient}}</a>'
      }, {
        name: 'subject',
        enableSorting: true,
        field: 'subject'
      }, {
        name: 'date',
        enableSorting: true,
        field: 'date'
      }, {
        name: 'action',
        enableFiltering: false,
        cellTemplate: '<button class="delete" ng-click="grid.appScope.$ctrl.deleteUser(row)">Delete</button><button class="btn primary" ng-click="grid.appScope.$ctrl.safeOrBlock(row)">Blocklist</button>'
      }, ]);
    });
    it('Check if method of allEmails have been called', () => {
      controller.allEmails();
      expect(controller.allEmails).toHaveBeenCalled();
    });
    it('Check if method of emailEmails have been called', () => {
      controller.emailEmails();
      expect(controller.emailEmails).toHaveBeenCalled();
    });
    it('Check if method of socialEmails have been called', () => {
      controller.socialEmails();
      expect(controller.socialEmails).toHaveBeenCalled();
    });
    it('Check if method of blockEmails have been called', () => {
      controller.blockEmails();
      expect(controller.blockEmails).toHaveBeenCalled();
    });
    it('Check if method of adsEmails have been called', () => {
      controller.adsEmails();
      expect(controller.adsEmails).toHaveBeenCalled();
    });
  });

});
