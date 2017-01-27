/**
 * Created by stadnykk on 1/26/2017.
 */
import userChartsController from './userCharts.controller';
import GlobalHardcode from '../../../app.globalHardcodeConfig.service.js';
import specConfig from '../charts.specConfig';

describe('userCharts Controller', () => {
  "use strict";
  let scope, controller,  AuthService, translate, dragular, element, mdDialog;
  let Firedbservice = {};
  let dialog = {};
  let FiredbAutorisation = {};
  let DialogDataService = {};
  let ChartsFirebaseDataService = {};
  let GlobalHardcodeConfigService;

  beforeEach(inject(($injector, $controller, $q) => {

    element = jasmine.createSpyObj('$element', ['element']);
    translate = jasmine.createSpyObj('$translate', ['translate']);
    AuthService = jasmine.createSpyObj('AuthService', ['registerAuthenticationListener']);
    dragular = jasmine.createSpyObj('controller', ['dragularService']);
    mdDialog = jasmine.createSpyObj('dialog', ['mdDialog', 'show']);

    FiredbAutorisation.responseData = () => {};
    DialogDataService.responseData = () => {};
    DialogDataService.dialogDataServiceData = () => {};
    Firedbservice.responseData = () => {};
    ChartsFirebaseDataService.chartsDataBuild = () => {};
    GlobalHardcodeConfigService = new GlobalHardcode();

    const res = specConfig;

    spyOn(Firedbservice, 'responseData').and.returnValue( () => {
      return 'Fake Data';
    });

    spyOn(ChartsFirebaseDataService, 'chartsDataBuild').and.callFake( () => {
      let defer = $q.defer();
      defer.resolve([{}, {}, {}]);
      return defer.promise;
    });

    spyOn(DialogDataService, 'responseData').and.returnValue( () => {
      let defer = $q.defer();
      defer.resolve({ dialogDataServiceData: res });
      return defer.promise;
    });

    spyOn(DialogDataService, 'dialogDataServiceData').and.callFake( () => {
      let defer = $q.defer();
      defer.resolve({ responseData: res });
      return defer.promise;
    });

    spyOn(FiredbAutorisation, 'responseData').and.returnValue( () => {
      let defer = $q.defer();
      defer.resolve({ userData: 'userData' });
      return defer.promise;
    });

    scope = $injector.get('$rootScope').$new();

    controller = $controller(userChartsController, {
      Firedbservice: Firedbservice,
      $scope: scope,
      $translate: translate,
      $element: element,
      $mdDialog: mdDialog,
      AuthService: AuthService,
      dragularService: dragular,
      FiredbAutorisation: FiredbAutorisation,
      DialogDataService: DialogDataService,
      ChartsFirebaseDataService: ChartsFirebaseDataService,
      GlobalHardcodeConfigService: GlobalHardcodeConfigService
    });
    scope.$digest();

    spyOn(controller, 'getUserData').and.callFake( () => {
      FiredbAutorisation.responseData();
    });
    spyOn(controller, 'dragularService');
    spyOn(controller, 'defaultConstructBuilder').and.callFake( () => {
      ChartsFirebaseDataService.chartsDataBuild();
    });
  }));

  describe('Constructor values', () => {
    it('Constructor values should be defined', () => {
      expect(controller.dragularService).toBeDefined();
      expect(controller.dialog).toBeDefined();
      expect(controller.translate).toBeDefined();
      expect(controller.dialogDataService).toBeDefined();
      expect(controller.FiredbAutorisation).toBeDefined();
      expect(controller.ChartsFirebaseDataService).toBeDefined();
      expect(controller.configData).toBeDefined();
    });
  });

  describe('Controller methods', () => {
    it('All Controller methods should be defined', () => {
      expect(controller.$onInit).toBeDefined();
      expect(controller.showDialogCharts).toBeDefined();
      expect(controller.getUserData).toBeDefined();
      expect(controller.showUIGrid).toBeDefined();
      expect(controller.showUserEmails).toBeDefined();
      expect(controller.defaultConstructBuilder).toBeDefined();
    });
  });
  describe('inside methods should be called', () => {
    it('$onInit methods should be called', () => {
      controller.$onInit();
      expect(controller.getUserData).toHaveBeenCalled();
      expect(controller.dragularService).toHaveBeenCalled();
      expect(controller.defaultConstructBuilder).toHaveBeenCalled();
    });
    describe('getUserData method', () => {
      it('getUserData', () => {
        controller.getUserData();
        expect(FiredbAutorisation.responseData).toHaveBeenCalled();
      });
    });
  });

});
