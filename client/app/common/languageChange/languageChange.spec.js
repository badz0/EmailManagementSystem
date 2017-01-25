import languageChangeController from './languageChange.controller';

describe('Language Change', () => {

  describe('Controller', () => {
    let controller, translate;

    beforeEach(inject(($injector) => {
      translate = jasmine.createSpyObj('$translate', ['use']);
      controller = new languageChangeController(translate);
    }));

    it('Check if method change language is defined', ()=> {
      expect(controller.changeLanguage).toBeDefined();
    });

    it('Sets translation', () => {
      controller.changeLanguage('ua');
      expect(translate.use).toHaveBeenCalled();
      expect(translate.use.calls.count()).toBe(1);
      expect(controller.lan).toEqual('ua');
    });
  });
});
