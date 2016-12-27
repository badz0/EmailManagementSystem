export class EmailDetailService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }
  getAllEmails() {
    return this.$http.get('https://myapp-45978.firebaseio.com/.json').then(response => response.data);
  }
  getEmail(id) {
    function emailMatch(email) {
      return email.id === id;
    }

    return this.getAllEmails().then(function(about) {
      return about.find(emailMatch);
    });
  }
}