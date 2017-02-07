import EmailDetailService from './grid.service';

describe('EmailDetail', () => {

  describe('Service', () => {
    let scope, emailService, FiredbAutorisation;
    beforeEach(inject(($injector, $q) => {
      FiredbAutorisation = jasmine.createSpyObj('FiredbAutorisation', ['responseData', 'getUserEmails']);
      FiredbAutorisation.getUserEmails.and.returnValue('mails');
      FiredbAutorisation.responseData.and.callFake( () => {
        let defer = $q.defer();
        defer.resolve({ userData: {index:0}});
        return defer.promise;
      });
      scope = $injector.get('$rootScope').$new();
      emailService = new EmailDetailService(FiredbAutorisation);
      scope.$digest();
    }));
    it('check if service constructor initialized', () => {
      expect(emailService.list).toEqual('mails');
      expect(emailService.res).toEqual(0);
    });
  });
});
