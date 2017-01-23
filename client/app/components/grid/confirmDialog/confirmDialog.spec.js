import confirmController from './confirm.controller';
import confirmTemplate from './confirm.template.del.html';
  describe('Confirm', () => {
    let confirm, $rootScope, $scope;
    beforeEach(() => {
      confirm = new confirmController();
    });

    it('confirm', () => { // erase if removing this.name from the controller
      expect(2+2).toEqual(4);
    });
  });