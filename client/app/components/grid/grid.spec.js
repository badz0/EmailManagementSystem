import GridModule from './grid';
import gridComponent from './grid.component';
import gridController from './grid.controller';
import gridTemplate from './grid.html';
import confirmController from './confirmDialog/confirm.controller.js';
import templateDelete from './confirmDialog/confirm.template.del.html';
import templateBlock from './confirmDialog/confirm.template.block.html';

describe('Grid', () => {
  let $rootScope, $state, $location, component;
  beforeEach(angular.mock.module(GridModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
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
    let scope, controller, mdDialog, EmailDetailService, FiredbAutorisation;

    beforeEach(inject(($injector, $controller, $q) => {
      EmailDetailService = jasmine.createSpyObj('EmailDetailService', ['getSocial', 'getAds', 'getBlock', 'getEmail']);
      EmailDetailService.getSocial.and.returnValue('social');
      EmailDetailService.getAds.and.returnValue('ads');
      EmailDetailService.getBlock.and.returnValue('block');
      EmailDetailService.getEmail.and.returnValue('safeEmails');

      FiredbAutorisation = jasmine.createSpyObj('FiredbAutorisation', ['responseData', 'getUserEmails']);
      FiredbAutorisation.getUserEmails.and.returnValue({
        mails: 'mails'
      });
      FiredbAutorisation.responseData.and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: {index:0}});
        return defer.promise;
      });
      
      mdDialog = jasmine.createSpyObj('$mdDialog', ['confirm', 'show']);
      mdDialog.show.and.callFake( () => {
        let defer = $q.defer();
        defer.resolve();
        return defer.promise;
      });

      scope = $injector.get('$rootScope').$new();
      controller = $controller(gridController, {
        $scope: scope,
        $mdDialog: mdDialog,
        EmailDetailService: EmailDetailService,
        FiredbAutorisation: FiredbAutorisation,
      });
      scope.$digest();
    }));

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

    it('Check data initialization', () => {
       expect(controller.allEmailsData.mails).toEqual('mails');
    });

    it('Check if all Emails init', () => {
      controller.$onInit();
      expect(controller.gridOptions.data).toEqual(controller.allEmailsData);
    });

    it('Check if method allEmails have gridOptions with all data', () => {
      controller.allEmails();
      expect(controller.gridOptions.data).toEqual(controller.allEmailsData);
    });

    it('Check if method socialEmails equal to social data', () => {
      controller.socialEmails();
      expect(controller.gridOptions.data).toEqual('social');
    });

    it('Check if method adsEmails equal to ads data', () => {
      controller.adsEmails();
      expect(controller.gridOptions.data).toEqual('ads');
    });

    it('Check if method blockEmails equal to blocklist data', () => {
      controller.blockEmails();
      expect(controller.gridOptions.data).toEqual('block');
    });

    it('Check if method emailEmails equal to safelist data', () => {
      controller.emailEmails();
      expect(controller.gridOptions.data).toEqual('safeEmails');
    });
    
    it('check deleteUser method is called with arguments', () => {
      controller.deleteUser('row');
      expect(mdDialog.confirm).toHaveBeenCalledWith({
        template: templateDelete,
        controller: confirmController,
        controllerAs: '$ctrl',
        clickOutsideToClose: true
      });
    });

    it('check safeOrBlock method is called with arguments', () => {
      controller.safeOrBlock('row');
      expect(mdDialog.confirm).toHaveBeenCalledWith({
        template: templateBlock,
        controller: confirmController,
        controllerAs: '$ctrl',
        clickOutsideToClose: true
      });
    });
    
  });
});

