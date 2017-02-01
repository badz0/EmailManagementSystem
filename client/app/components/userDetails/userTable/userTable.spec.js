import userTableModule from './userTable'; 
import userTableController from './userTable.controller'; 
import userTableComponent from './userTable.component'; 
import userTableTemplate from './userTable.html';


describe('User Table', () => {

  describe('User Table component', () => { 
    let component = userTableComponent; 
    it('expects the right userTable template',() => { 
      expect(component.template).toEqual(userTableTemplate); 
    }); 
    it('expects the right userTable controller', () => { 
      expect(component.controller).toEqual(userTableController); 
    }); 
  });

  describe('UserTable Controller', () => {
    let scope, controller, data;
    let FiredbAutorisation = {};
    let mdDialog = {};

    beforeEach(inject(($injector, $controller, $q,$document) => {
      
      
      FiredbAutorisation.responseData = () => {};
      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'userData'});
        return defer.promise;
      });

      FiredbAutorisation.getUserDetails = (val) => { 
        return ([{
          'name': 'Ivanna',
          'birthDate': '1995-08-07',
          'surname': 'Savchuk',
          'login': 'IvannaSW',
          'country': 'Ukraine',
          'email': 'ivanna.sav08@gmail.com',
          'city': 'Lviv'
        }, {
          'name': 'Svitlana',
          'birthDate': '1994-04-02',
          'surname': 'Rytkina',
          'login': 'SvitlanaRT',
          'country': 'Ukraine',
          'email': 'svitlana.rytkina@gmail.com',
          'city': 'Lviv'
        
        }]);
      };


      mdDialog.show = () => {};
      spyOn(mdDialog, 'show').and.callFake(() => {
        let defer = $q.defer();
        defer.resolve('test');
        return defer.promise;
      });

           
      scope = $injector.get('$rootScope').$new();
      controller = $controller(userTableController, {
        $scope: scope,
        FiredbAutorisation: FiredbAutorisation,
        $mdDialog: mdDialog,
        $document:$document
        
       
      });
      
      scope.$digest();
    }));


        
    it('expexts that gridOptions is Object', ()=>{
      controller.$onInit();
      expect(controller.gridOptions).toEqual(jasmine.any(Object));
    });

    it('expexts that gridOptions properties are defined correctly', ()=>{
      controller.$onInit();
      expect(controller.gridOptions.enableFiltering).toBe(true);
      expect(controller.gridOptions.exporterMenuCsv).toBe(true);
      expect(controller.gridOptions.enableGridMenu).toBe(true);
      expect(controller.gridOptions.enableSorting).toBe(true);
    });
    
    it('expects that gridOptions.data get correct data from firebase', ()=>{
      controller.$onInit();
      expect(controller.gridOptions.data).toBe(controller.users);
    });

    it('expects that mdDialog methods has been called', () => {
      controller.showWindow();
      expect(mdDialog.show).toHaveBeenCalled();
    });

    it('expects that FiredbAutorisation has been called', () => {
      expect(FiredbAutorisation.responseData).toHaveBeenCalled();
    });

    it('expects that userData is correctly identified', () => {
      expect(controller.userData).toBe('userData');
    });
    
      
  });

});