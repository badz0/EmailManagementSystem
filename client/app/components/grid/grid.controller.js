import * as firebase from 'firebase';

class GridController {
  constructor(Firedbservice, EmailDetailService, $firebaseObject) {
    'ngInject';
    const ref = firebase.database().ref().child('user/0').child('listOfEmails');
    this.data = $firebaseObject(ref);
    this.EmailDetailServiceSocial = EmailDetailService.getSocial();
    this.EmailDetailServiceAdvertising = EmailDetailService.getAdvertising();
  }
  $onInit() {
    this.mainPost = () => {
      this.gridOptions.data = this.data;
    };
    this.social = () => {
      this.gridOptions.data = this.EmailDetailServiceSocial;
    };
    this.advertising = () => {
      this.gridOptions.data = this.EmailDetailServiceAdvertising;
    };
    this.gridOptions = {
      enableFiltering: true,
      exporterMenuCsv: false,
      enableGridMenu: true,
      columnDefs: [
        { name: 'email', enableFiltering: false, enableSorting: false, enableHiding: false, cellTemplate: '<a class="cell-template-ref" ui-sref="email({ id: row.entity.id })">{{row.entity.recipient}}</a>' },
        { name: 'subject', enableSorting: true, field: 'subject' },
        { name: 'date', enableSorting: true, field: 'date' },
      ],
      data: this.data
    };
  }
}
export default GridController;
