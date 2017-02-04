import userChartsController from './userCharts.controller';
import GlobalHardcode from '../../../app.globalHardcodeConfig.service.js';
import dialogData from '../charts.dialogBuild.service.js';
import chartsFirebaseData from '../charts.firebaseData.service.js';
import specConfig from '../charts.specConfig';

describe('userCharts Controller', () => {

  let scope, controller,  AuthService, translate, dragular, element, mdDialog;
  let dialog = {},
    FiredbAutorisation = {},
    ChartsFirebaseDataService = {},
    HardcodeConfigService;

  beforeEach(inject(($injector, $controller, $q) => {
    element = jasmine.createSpyObj('$element', ['element']);
    translate = jasmine.createSpyObj('$translate', ['translate']);
    AuthService = jasmine.createSpyObj('AuthService', ['registerAuthenticationListener']);
    dragular = jasmine.createSpyObj('controller', ['dragularService']);
    mdDialog = jasmine.createSpyObj('dialog', ['mdDialog', 'show']);

    FiredbAutorisation.responseData = () => {};
    ChartsFirebaseDataService.chartsDataBuild = () => {};
    dialog.show = () => {};
    dialogData.dialogServiceData = () => {};

    HardcodeConfigService = new GlobalHardcode();
    const res = specConfig;

    spyOn(dialogData, 'dialogServiceData').and.callFake( () => {
      let defer = $q.defer();
      defer.resolve(res);
      return defer.promise;
    });

    spyOn(ChartsFirebaseDataService, 'chartsDataBuild').and.callFake( () => {
      let defer = $q.defer();
      defer.resolve(res);
      return defer.promise;
    });

    spyOn(FiredbAutorisation, 'responseData').and.returnValue( () => {
      let defer = $q.defer();
      defer.resolve({ userData: 'userData' });
      return defer.promise;
    });

    scope = $injector.get('$rootScope').$new();
    controller = $controller(userChartsController, {
      $scope: scope,
      $translate: translate,
      $element: element,
      $mdDialog: mdDialog,
      AuthService: AuthService,
      dragularService: dragular,
      FiredbAutorisation: FiredbAutorisation,
      DialogService: dialogData,
      ChartsFirebaseDataService: chartsFirebaseData,
      HardcodeConfigService: HardcodeConfigService
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
      expect(controller.DialogService).toBeDefined();
      expect(controller.FiredbAutorisation).toBeDefined();
      expect(controller.ChartsFirebaseDataService).toBeDefined();
      expect(controller.configData).toBeDefined();
    });
  });

  describe('Controller methods', () => {
    it('All Controller methods should be defined', () => {
      controller.showDialogCharts(0);
      expect(controller.$onInit).toBeDefined();
      expect(controller.showDialogCharts).toBeDefined();
      expect(controller.getUserData).toBeDefined();
      expect(controller.showUIGrid).toBeDefined();
      expect(controller.showUserEmails).toBeDefined();
      expect(controller.defaultConstructBuilder).toBeDefined();
    });
  });

  describe('$onInit()', () => {
    it('$onInit methods should be called', () => {
      controller.$onInit();
      expect(controller.getUserData).toHaveBeenCalled();
      expect(controller.dragularService).toHaveBeenCalled();
      expect(controller.defaultConstructBuilder).toHaveBeenCalled();
    });

    describe('getUserData()', () => {
      it('getUserData method should be called', () => {
        controller.getUserData();
        expect(FiredbAutorisation.responseData).toHaveBeenCalled();
      });
    });

    describe('defaultConstructBuilder()', () => {
      it('defaultConstructBuilder() method should work properly and userList be equal Array', () => {
        controller.showDialogCharts(0);
        controller.defaultConstructBuilder();
        controller.showUserEmails(0);
        expect(controller.defaultConstructBuilder).toHaveBeenCalled();
        expect(controller.usersList).toEqual(jasmine.any(Array));
      });
    });
  });
});
