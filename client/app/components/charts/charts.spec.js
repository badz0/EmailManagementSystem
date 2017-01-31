// import ChartsController from './charts.controller';
// import GlobalHardcode from '../../app.globalHardcodeConfig.service.js';
// import dialogBuild from './charts.dialogBuild.service.js';
// import specConfig from './charts.specConfig';
// import expectedRes from './charts.specExpectedRes.js';

//   describe('Controllers', () => {
//     let controller, service;

//     beforeEach(() => {
//        service = new GlobalHardcode();
//        controller =  new ChartsController(service);
//        spyOn(controller, 'onStateChange');
//        spyOn(controller, '$onInit');
//      });

//     it("If stateChange function is defined", () => {
//       expect(controller.onStateChange).toBeDefined();
//       controller.onStateChange('chart');
//       expect(controller.onStateChange).toHaveBeenCalledWith('chart');
//       expect(controller.onStateChange.calls.count()).toEqual(1);
//     });

//     it("If $onInit function is defined", () => {
//       expect(controller.$onInit).toBeDefined();
//       controller.$onInit();
//       expect(controller.$onInit).toHaveBeenCalled();
//       expect(controller.$onInit.calls.count()).toEqual(1);
//     });

//     it('Global hardcode config data should be defined', () => {
//       expect(controller.configData).toBeDefined();
//       expect(controller.configData.buttons.next).toEqual('statistics.buttons.next');
//     });
//   });




