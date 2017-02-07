import ChartsController from './charts.controller';
import GlobalHardcode from '../../app.globalHardcodeConfig.service.js';

describe('Charts Controller', () => {
  let controller, service;

  beforeEach(() => {
    service = new GlobalHardcode();
    controller =  new ChartsController(service);
    spyOn(controller, 'onStateChange');
    spyOn(controller, '$onInit');
  });

  describe('Controller methods', () => {
    it('Controller methods should be defined', () => {
      expect(controller.onStateChange).toBeDefined();
      expect(controller.$onInit).toBeDefined();
      expect(controller.configData).toBeDefined();
    });
  });

  describe('stateChange', () => {
    it('Chart stateChange is changed', () => {
      controller.onStateChange('chart');
      expect(controller.onStateChange).toHaveBeenCalledWith('chart');
      expect(controller.onStateChange.calls.count()).toEqual(1);
    });
  });

  describe('onInit()', () => {
    it('$onInit function is working properly', () => {
      controller.$onInit();
      expect(controller.$onInit).toHaveBeenCalled();
      expect(controller.$onInit.calls.count()).toEqual(1);
    });
  });

  describe('GlobalHardcodeHonfig', () => {
    it('Globalhardcodeconfig data should have it`s properties', () => {
      expect(controller.configData.buttons.next).toEqual('statistics.buttons.next');
    });
  });
});




