export class EmailDetailService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }
  getAllEmails() {
    return this.$http.get('https://myapp-45978.firebaseio.com/.json').then(response => response.data);
  }
  getEmail(id) {
    return this.getAllEmails().then(function(grid) {
      return grid.find((email) => {return email.id === id});
    });
  }
}