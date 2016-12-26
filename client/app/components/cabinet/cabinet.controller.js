import data from './cabinet.data.json';
import countries from './cabinet.countries.json';
class CabinetController {
  constructor() {}
  $onInit () {
    this.name = 'cabinet';
    this.user = data;
    this.countries=countries;
  }
  submitForm(user) {
      angular.copy(user, this.user[0]);
  }
}

export default CabinetController;
