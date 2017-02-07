import GlobalChartController from './globalChart.controller.js';
import GlobalHardcode from '../../../app.globalHardcodeConfig.service.js';
import chartsFirebaseData from '../charts.firebaseData.service.js';
import amCharts from 'amcharts3';
import specConfig from '../charts.specConfig';

describe('GlobalCharts Controller', () => {

  let scope, controller, translate;
  let FiredbAutorisation = {};
  let ChartsFirebaseDataService = {};
  let HardcodeConfigService;

  beforeEach(inject(($injector, $controller, $q) => {

    translate = jasmine.createSpyObj('$translate', ['translate']);

    FiredbAutorisation.responseData = () => {};
    ChartsFirebaseDataService.chartsDataBuild = () => {};

    HardcodeConfigService = new GlobalHardcode();

    scope = $injector.get('$rootScope').$new();
    controller = $controller(GlobalChartController, {
      $scope: scope,
      ChartsFirebaseDataService: chartsFirebaseData,
      HardcodeConfigService: HardcodeConfigService,
      $translate: translate,
      FiredbAutorisation: FiredbAutorisation
    });
    scope.$digest();

    spyOn(controller, 'getUserData').and.callFake( () => {
      let defer = $q.defer();
      defer.resolve({ userData: 'userData' });
      return defer.promise;
    });
  }));

  describe('nextItem()', () => {
    it('nextItem should change currentNavItem value', () => {
      controller.nextItem();
      controller.nextItem();
      expect(controller.configData.currentNavItem).toBe(2);
    });
  });

  describe('previousItem()', () => {
    it('previousItem should change currentNavItem value', () => {
      controller.previousItem();
      expect(controller.configData.currentNavItem).toBe(6);
    });
  });

  describe('onInit()', () => {
    it('onInit calls getUserData and gets data from ChartsFirebaseDataService', () => {
      controller.$onInit();
      expect(controller.getUserData).toHaveBeenCalled();
      expect(controller.getUserData.calls.count()).toEqual(1);
    });

    describe('destroyCharts()', () => {
      it('should kill charts and return false', () => {
        expect(controller.destroyCharts()).toBeTruthy();
      });
      it('should change globalChartsStats to false', () => {
        controller.destroyCharts();
        expect(controller.configData.navBarDisplay.globalChartsStats).toBeFalsy();
      });
    });
  });
});
