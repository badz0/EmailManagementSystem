import CabinetController from './cabinet.controller';
import CabinetComponent from './cabinet.component';
import CabinetTemplate from './cabinet.html';
import cabinetConstant from './cabinet.constant';
import cabinetDirective from './cabinet.uploader.directive';
import countries from './cabinet.countries.json';


describe('Cabinet', ()=>{
  describe('Controller', ()=>{
    let scope, controller,$firebaseObject,mdColorPalette,Сonstants;
    let FiredbAutorisation = {};
    beforeEach(inject(($injector, $controller, $q ) => {
      FiredbAutorisation.responseData = () => {};
      FiredbAutorisation.getUserData = () => {};
      FiredbAutorisation.updateUser = () => {};
      FiredbAutorisation.deleteUserAvatar = () => {};
      mdColorPalette={'green':500};
      Сonstants = cabinetConstant;
      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: {index:9}});
        return defer.promise;
      });
      spyOn(FiredbAutorisation,'getUserData').and.callFake( () => {
        return {"avatar" : "https://firebasestorage.googleapis.com/v0/b/emailmanagementsystem-d4f11.appspot.com/o/user9%2F9.png?alt=media&token=cb537f71-6f8d-4300-b9f3-5f8b3c8d37b0"};
      });
      spyOn(FiredbAutorisation,'updateUser').and.callFake( () => {
        return "executed"; 
      });
      spyOn(FiredbAutorisation,'deleteUserAvatar').and.callFake( () => {
        return "executed"; 
      });
      scope = $injector.get('$rootScope').$new();
      controller = $controller(CabinetController, {
        $firebaseObject: $firebaseObject,
        $scope: scope,
        FiredbAutorisation: FiredbAutorisation,
        $mdColorPalette:mdColorPalette,
        Сonstants:Сonstants
      });
      scope.$digest();
    }));
    it('constructor shoud be defined', ()=>{
      expect(controller.constructor).toBeDefined();
    });
    it('should get object with users data', ()=>{
      expect(controller.users).toEqual(jasmine.any(Object));
    });
    it('all methods should be defined', ()=>{
      expect(controller.$onInit).toBeDefined();
      expect(controller.clearCity).toBeDefined();
      expect(controller.submitForm).toBeDefined();
      expect(controller.getFileName).toBeDefined();
      expect(controller.deleteAvatar).toBeDefined();
      expect(controller.selectTheme).toBeDefined();
    });
    it('should have a name property', ()=>{
      let controller = CabinetController;
      expect(controller.name).toEqual('CabinetController'); 
    });
    describe('$onInit()',()=>{
      it('countries should be object',()=>{
        controller.$onInit();
        expect(controller.countries).toEqual(countries);
      });
      it('user should be object',()=>{
        controller.$onInit();
        expect(controller.user).toEqual(jasmine.any(Object));
      });
    });
    describe('clearCity()',()=>{
      it('called and executed properly',()=>{
        controller.$onInit();
        controller.clearCity();
        expect(controller.user.city).toEqual(null);
      });
    });
    describe('deleteAvatar()',()=>{
      it('called and executed properly',()=>{
        controller.$onInit();
        controller.deleteAvatar();
        expect(controller.FiredbAutorisation.deleteUserAvatar).toHaveBeenCalled();
        expect(controller.FiredbAutorisation.updateUser).toHaveBeenCalled();
      });
    });
    describe('getFileName()',()=>{
      it('called and executed properly ', () => {
        controller.$onInit();
        expect(controller.getFileName()).toEqual('9.png')
      });
    });
    describe('submitForm()',()=>{
      it('called and executed properly',()=>{
        controller.$onInit();
        controller.user.country={'country':"USA"};
        controller.submitForm();
        expect(controller.FiredbAutorisation.updateUser).toHaveBeenCalled();
        expect(controller.user).toEqual(jasmine.any(Object));
      });
    });
    describe('selectTheme(color)',()=>{
      it('called and executed properly',()=>{
        controller.$onInit();
        let color='green';
        controller.selectTheme(color);
        expect(controller.user.themeColor).toEqual(jasmine.any(String));
        expect(controller.FiredbAutorisation.updateUser).toHaveBeenCalled();
      });
    });
  });
  
  describe('Component', () => {
    let component = CabinetComponent;
    it('includes the intended template',() => {
      expect(component.template).toEqual(CabinetTemplate);
    });
    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CabinetController);
    });
  });
  describe('Constant', () => {
    let image=cabinetConstant.avatarDefault.IMAGE_LINK;
    it('should use correct default link and to be a string',() => {
      expect(image).toEqual('https://firebasestorage.googleapis.com/v0/b/emailmanagementsystem-d4f11.appspot.com/o/user_avatar_default.gif?alt=media&token=188186f9-52fb-4557-a00e-7dd517e4e2d5');
      expect(image).toEqual(jasmine.any(String));
    });
  });
  
  describe('Directive', () => {
    let directive=new cabinetDirective();
    it('should have correct properties',() => {
      expect(directive.controller).toEqual(jasmine.any(Function));
      expect(directive.restrict).toBe('A');
      expect(directive.bindToController).toBeTruthy();
    });
    it('link should be function',() => {
      expect(directive.link).toEqual(jasmine.any(Function));
    });
  });
});