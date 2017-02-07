import languageChangeController from './languageChange.controller';

describe('Language Change', () => {

  describe('Controller', () => {
    let controller, translate;

    beforeEach(inject(($injector) => {
      translate = jasmine.createSpyObj('$translate', ['use']);
      translate.use.and.returnValue('en');
      controller = new languageChangeController(translate);
    }));

    it('Check if onInit sets the language key', () => {
      controller.$onInit();
      expect(translate.use).toHaveBeenCalled();
      expect(controller.lan).toBe('en');
    });

    it('Check changing language', () => {
      controller.changeLanguage('ua');
      expect(translate.use).toHaveBeenCalled();
      expect(translate.use.calls.count()).toBe(1);
      expect(controller.lan).toEqual('ua');
    });
  });
});
