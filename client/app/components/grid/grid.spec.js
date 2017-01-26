import GridModule from './grid'
import gridController from './grid.controller'
import EmailDetailService from './grid.service'



describe('Grid', () => {
    let $rootScope, $httpBackend, $state, $location, $controller, $componentController, $compile;
    beforeEach(angular.mock.module(GridModule));
    beforeEach(inject(($injector) => {
        $rootScope = $injector.get('$rootScope');
        $componentController = $injector.get('$componentController');
        $state = $injector.get('$state');
        $location = $injector.get('$location');
        $compile = $injector.get('$compile');
    }));
    describe('Module', () => {
        it('default component should be grid', () => {
            $location.url('/grid');
            $rootScope.$digest();
            expect($state.current.component).toEqual('grid');
        });
    });

    describe('Controller', () => {
    let scope, controller, firebaseObject, mdDialog, Firedbservice;
    let EmailDetailService = {};
    let FiredbAutorisation = {};
    let myEmails = [{
     "content": "Hi!I'm a student.",
     "date": "2016-12-01",
     "group": "primary",
     "id": 1,
     "isSafe": false,
     "recipient": "ivanna.sav08@gmail.com",
     "subject": "Education"
 }, {
     "content": "A little smile. A word of cheer. A bit of love from someone near. A little gift from one held dear. Best wishes for the coming year. These make a Merry Christmas!",
     "date": "2016-12-01",
     "group": "social",
     "id": 2,
     "isSafe": true,
     "recipient": "mail2.adress@gmail.com",
     "subject": "Christmas greetings"
 }, {
     "content": "Aenean efficitur nunc a arcu venenatis fermentum. Donec et fringilla ligula, vel maximus dui. Integer dignissim ante vel erat vehicula, eget mattis neque semper. Nunc vestibulum, nisl non aliquam egestas, ex diam vehicula sem, non congue tellus sapien id dolor. Donec convallis nisi in purus vulputate tristique. Proin laoreet ex tortor, vitae imperdiet libero imperdiet eget.",
     "date": "2016-12-02",
     "group": "primary",
     "id": 4,
     "isSafe": false,
     "recipient": "ivanna.sav08@gmail.com",
     "subject": "About angular 1.6"
 }, {
     "content": "ABC Bags almost for free 50% off leather laptop bags through 3/31/12. Show this message to store manager to get half off. Find a store: www.someWeb.com/locations.",
     "date": "2016-12-13",
     "group": "spam",
     "id": 19,
     "isSafe": true,
     "recipient": "bagsAreAwesome@gmail.com",
     "subject": "Open this email!"
 }, {
     "content": "Dear facebook user, Update your  In an effort to make your online experience safer and more enjoyable, Facebmk account  Facebook will be implementing a new login system that will affect all  Facebook users. These changes will offer new features and increased account security.  Before you are able to use the new login system, you will be required to  update your account. Click here to update your account online now.  If you haye any questions, reference our New User Guide.  Thanks, The Facebook Team",
     "date": "2016-12-21",
     "group": "social",
     "id": 34,
     "isSafe": true,
     "recipient": "facebook@fb.com",
     "subject": "Facebook",
     "thumbnail": "http://icons.iconarchive.com/icons/icontexto/social-inside/128/social-inside-facebook-icon.png"
 }]
    beforeEach(inject(($injector, $controller, $q) => {
      EmailDetailService = jasmine.createSpyObj('EmailDetailService', ['getSocial', 'getAds', 'getBlock', 'getEmail']);
      Firedbservice = jasmine.createSpyObj('Firedbservice', ['getEmail']);
      firebaseObject = jasmine.createSpyObj('$firebaseObject', ['fbObject']);
      mdDialog = jasmine.createSpyObj('$mdDialog', ['mdDialog']);
      FiredbAutorisation.responseData = () => {};
      spyOn(FiredbAutorisation, 'responseData').and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: 'users'});
        return defer.promise;
      });
      scope = $injector.get('$rootScope').$new();
      controller = $controller(gridController, {
        $scope: scope,
        $firebaseObject: firebaseObject,
        $mdDialog: mdDialog,
        EmailDetailService: EmailDetailService,
        Firedbservice: Firedbservice,
        FiredbAutorisation: FiredbAutorisation
      });
      scope.$digest();
      }));
      it('Check allEmails initialization', () => {
        expect(controller.users).toBe('users');
      });
      it('Check if method allEmails defined', () => {
        expect(controller.allEmails).toBeDefined();;
      });
  });

});
