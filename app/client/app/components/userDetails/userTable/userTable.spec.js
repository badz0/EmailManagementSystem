import userTableModule from './userTable'; 
import userTableController from './userTable.controller'; 
import userTableComponent from './userTable.component'; 
import userTableTemplate from './userTable.html';


describe('User Table Component', () => {

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
    
    beforeEach(inject(($injector, $controller, $q) => {
      
      
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

                
      scope = $injector.get('$rootScope').$new();
      controller = $controller(userTableController, {
        $scope: scope,
        FiredbAutorisation: FiredbAutorisation,
            
      });
      
      scope.$digest();
    }));


        
    it('expects that gridOptions is Object', ()=>{
      expect(controller.gridOptions).toEqual(jasmine.any(Object));
    });

    it('expects that gridOptions properties are defined correctly', ()=>{
      expect(controller.gridOptions.enableFiltering).toBe(true);
      expect(controller.gridOptions.exporterMenuCsv).toBe(true);
      expect(controller.gridOptions.enableGridMenu).toBe(true);
      expect(controller.gridOptions.enableSorting).toBe(true);
    });
    
    it('expects that gridOptions.data get correct data from firebase', ()=>{
      expect(controller.gridOptions.data).toBe(controller.users);
    });

    
    it('expects that FiredbAutorisation has been called', () => {
      expect(FiredbAutorisation.responseData).toHaveBeenCalled();
    });

    it('expects that userData is correctly identified', () => {
      expect(controller.userData).toBe('userData');
    });
    
      
  });

});