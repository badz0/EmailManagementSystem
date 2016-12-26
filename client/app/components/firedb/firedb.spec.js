import firedbModule from './firedb'

describe('firedb', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(firedbModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  
});
