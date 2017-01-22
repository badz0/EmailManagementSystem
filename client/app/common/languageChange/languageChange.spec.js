import languageChangeModule from './languageChange'
import languageChangeController from './languageChange.controller';
import languageChangeComponent from './languageChange.component';
import languageChangeTemplate from './languageChange.html';

describe('Language Change', () => {

  let lanChange;

  beforeEach(() => {
    lanChange = new languageChangeController();

  });

  it('Set translation', () => {
    lanChange.changeLanguage('ua');
    expect(lanChange.lan).toEqual('ua');

  });

  describe('Component', () => {
      // component/directive specs
      let component = languageChangeComponent;
      it('includes the intended template',() => {
        expect(component.template).toEqual(languageChangeTemplate);
      });
      it('invokes the right controller', () => {
        expect(component.controller).toEqual(languageChangeController);
      });
  });
});
