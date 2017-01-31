// import ChartsController from './charts.controller';
// import GlobalHardcode from '../../app.globalHardcodeConfig.service.js';
// import dialogBuild from './charts.dialogBuild.service.js';
// import specConfig from './charts.specConfig';
// import expectedRes from './charts.specExpectedRes.js';

// describe('Dialog Service initialization', () => {
//     let controller, service;
//     let ChartsFirebaseDataService = {};
//     const res = specConfig;
//     const expected = expectedRes;

//     beforeEach(inject(($injector, $controller, $q) => {
//       ChartsFirebaseDataService.responseData = () => {};
//       ChartsFirebaseDataService.chartsDataBuild = () => {};

//       spyOn(ChartsFirebaseDataService, 'responseData').and.callFake( () => {
//         let defer = $q.defer();
//         defer.resolve( { responseData: res } );
//         return defer.promise;
//       });
//       spyOn(ChartsFirebaseDataService, 'chartsDataBuild').and.callFake( () => {
//         let defer = $q.defer();
//         defer.resolve( { responseData: res } );
//         return defer.promise;
//       });

//       service = new GlobalHardcode();
//       controller = $controller(dialogBuild, {
//         ChartsFirebaseDataService: ChartsFirebaseDataService,
//         GlobalHardcodeConfigService: service,
//       });
//     }));

//     describe(`Dialog Service methods verification`, () => {
//       it(`Global HardCode should be defined`, () => {
//         expect(controller.GlobalHardcodeConfigService).toBeDefined();
//         expect(controller.GlobalHardcodeConfigService.currentNavItem).toBeLessThan(1);
//         expect(controller.GlobalHardcodeConfigService.navBarDisplay.usersLists).toBeTruthy();
//       });

//       it("Main service dialogDataServiceData return function verification", () => {
//         ChartsFirebaseDataService.chartsDataBuild(0);
//         expect(ChartsFirebaseDataService.chartsDataBuild).toHaveBeenCalled();
//         expect(ChartsFirebaseDataService.chartsDataBuild.calls.count()).toEqual(1);
//         expect(ChartsFirebaseDataService.chartsDataBuild(0).$$state.value.responseData.user[0]).toEqual(jasmine.objectContaining( {name: expected.name} ));
//         expect(ChartsFirebaseDataService.chartsDataBuild(0).then(res => {
//           return res.responseData;
//         })).toEqual(jasmine.any(Object));
//       });

//       it('Expext all DialogDataService methods defined', () => {
//         expect(controller.dialogDataServiceData).toBeDefined();
//         expect(controller.searchEmailsData).toBeDefined();
//         expect(controller.searchUnicData).toBeDefined();
//         expect(controller.chartsDataProvider).toBeDefined();
//         expect(controller.chartSortMaxDataProvider).toBeDefined();
//         expect(controller.chartSortRemoveMinData).toBeDefined();
//       });


//       it(`searchEmailsData method should work`, () => {
//         controller.searchEmailsData(res);
//         expect(controller.searchEmailsData(res)[0].letters[0].id).toBe(1);
//         expect(controller.searchEmailsData(res)[0].letters[1]).toEqual(jasmine.objectContaining({content: expected.content}));
//       });

//       describe(`searchUnicData method should workn`, () => {
//         it('Group data verification', () => {
//           expect(controller.searchUnicData(res, 0, 'group')[0]).toBe(expected.firstGroup);
//         });
//         it('Date data verification', () => {
//           expect(controller.searchUnicData(res, 0, 'date')[0]).toBe(expected.firstDate);
//         });
//         it('Recipient data verification', () => {
//           expect(controller.searchUnicData(res, 0, 'recipient')[0]).toBe(expected.firstRecip);
//         });
//       });

//       describe(`searchEmailsData method should work`, () => {
//         it('Group data verification', () => {
//           expect(controller.chartsDataProvider(res, 0, 'group')[1].group).toBe(expected.secondGroup);
//         });
//         it('Date data verification', () => {
//           expect(controller.chartsDataProvider(res, 0, 'date')[1].date).toBe(expected.secondDate);
//         });
//         it('Recipient data verification', () => {
//           expect(controller.chartsDataProvider(res, 0, 'recipient')[1].recipient).toBe(expected.secondRecip);
//         });
//       });

//       it('chartSortMaxDataProvider method should work', () => {
//         expect(controller.chartSortMaxDataProvider(res, 0, 'recipient')).toEqual(jasmine.any(Array));
//       });

//       it('chartSortRemoveMinData method should work', () => {
//         expect(controller.chartSortRemoveMinData(res, 0, 'recipient')).toEqual(jasmine.any(Array));
//       });
//     });
//   });
