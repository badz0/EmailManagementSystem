import confirmController from './confirm.controller';
describe('Confirm controller', () => {
  let controller;
  beforeEach(() => {
    controller = new confirmController();
  });

  it('is Defined', () => {
    expect(controller.confirmNo).toBeDefined();
    expect(controller.confirmYes).toBeDefined();
  });
  it('is Function', () => {
    expect(controller.confirmNo).toEqual(jasmine.any(Function));
    expect(controller.confirmYes).toEqual(jasmine.any(Function));
  });
});
