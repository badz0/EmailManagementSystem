import AppnavModule from './appnav'
import AppnavController from './appnav.controller';
import AppnavComponent from './appnav.component';
import AppnavTemplate from './appnav.html';

describe('Appnav', () => {
  let $rootScope, makeController;

  beforeEach(window.module(AppnavModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new AppnavController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(AppnavTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = AppnavComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(AppnavTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(AppnavController);
      });
  });
});
