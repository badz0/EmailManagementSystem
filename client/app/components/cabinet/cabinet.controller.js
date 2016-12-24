import data from './cabinet.data.json';
import countries from './cabinet.countries.json';
class CabinetController {
  constructor() {
    let vm = this;
    vm.name = 'cabinet';
    vm.user = data;
    vm.countries=countries;
    vm.submit = function() {
      alert('submit');
    };
  }
}

export default CabinetController;
