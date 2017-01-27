import Firedbservice from './firedb.service';
 
describe('FiredbService', ()=> {
  let firedbService;
  
  firedbService = new Firedbservice();
  
    
  it('Firedbservice should be defined', ()=> {
    expect(Firedbservice).toBeDefined();
  });
});