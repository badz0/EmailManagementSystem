import switcherModule from './switcher'; 
import switcherController from './switcher.controller'; 
import switcherComponent from './switcher.component'; 
import switcherTemplate from './switcher.html'; 

describe('Switcher', () => {
  

  describe('Switcher component', () => { 
    let component = switcherComponent; 
    it('expects the right switcher template ',() => { 
      expect(component.template).toBe(switcherTemplate); 
    }); 
    it('expects the right switcher controller', () => { 
      expect(component.controller).toBe(switcherController); 
    }); 
  });

  describe('Switcher Controller', () => {
    let scope, controller, onStateChange;
    let FiredbAutorisation = {};
    onStateChange = jasmine.createSpy('onStateChange');
   

    beforeEach(inject(($injector, $controller, $q) => {
      
      FiredbAutorisation.responseData = () => {};

      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'userData'});
        return defer.promise;
      });

      scope = $injector.get('$rootScope').$new();
      controller = $controller(switcherController, {
        $scope: scope,
        FiredbAutorisation: FiredbAutorisation
      },{
        onStateChange: onStateChange
      });
      controller.setState('test');
      scope.$digest();
          
      
    }));

    it('expects that setState method has been defined', ()=> {
      expect(controller.setState).toBeDefined();
                    
    });

    it('expects that onStateChange has been called with right param', () => {
      expect(onStateChange).toHaveBeenCalledWith({state: 'test'});
    });

    it('expects that FiredbAutorisation method has been called', () => {
      expect(FiredbAutorisation.responseData).toHaveBeenCalled();
    });

    it('check userData initialization', () => {
      expect(controller.userData).toBe('userData');
    });

        
  });
});


