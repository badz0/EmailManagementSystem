import emailController from './emailDetail.controller';
import emailComponent from './emailDetail.component';
import emailDetail from './emailDetail.html';

describe('Grid Component emailDetail controller', () => {
  let controller, state, scope;
  let stateParams = {
    id: 1
  };
  let EmailDetailService = {};
  let mdDialog = {};
  let FiredbAutorisation = {};
  beforeEach(inject(($injector, $controller, $q, $log) => {
    state = jasmine.createSpyObj('$state', ['go']);
  FiredbAutorisation.responseData = () => {};
      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'users'});
        return defer.promise;
      });    
    EmailDetailService.getList = () => {};
    spyOn(EmailDetailService, 'getList').and.callFake(() => {
      let defer = $q.defer();
      defer.resolve([{
        "id": 1
      }, {
        "id": 2
      }]);
      return defer.promise;
    });
    mdDialog.confirm = () => {};
    spyOn(mdDialog, 'confirm').and.callFake(() => {
      let defer = $q.defer();
      defer.resolve();
      return defer.promise;
    });
    mdDialog.show = () => {};
    spyOn(mdDialog, 'show').and.callFake(() => {
      let defer = $q.defer();
      defer.resolve();
      return defer.promise;
    });

    scope = $injector.get('$rootScope').$new();
    controller = $controller(emailController, {
      $scope: scope,
      $mdDialog: mdDialog,
      EmailDetailService: EmailDetailService,
      $stateParams: stateParams,
      $state: state,
      FiredbAutorisation: FiredbAutorisation,
    });
    scope.$digest();
  }));

  it('emailDetail controller find right user', () => {
    controller.$onInit();
    scope.$digest();
    expect(controller.currentData.id).toEqual(stateParams.id);
  });
  it('emailDetail controller servis is called', () => {
    controller.$onInit();
    expect(EmailDetailService.getList).toHaveBeenCalled();
  });
  it('emailDetail controller function deleteUser is define', () => {
    expect(controller.deleteUser).toBeDefined();
  });
  it('emailDetail controller mdDialog.confirm is called', () => {
    controller.deleteUser();
    expect(controller.mdDialog.confirm).toHaveBeenCalled();
  });
  it('emailDetail controller mdDialog.show is called', () => {
    controller.deleteUser();
    expect(controller.mdDialog.show).toHaveBeenCalled();
  });
});

describe('Grid Component emailDetail component', () => {
  it('emailDetail component right template', () => {
    expect(emailComponent.template).toEqual(emailDetail)
  });
  it('emailDetail component right controller', () => {
    expect(emailComponent.controller).toEqual(emailController)
  });
});