import controller from './addDialog/addDialog.controller';
import template from './addDialog/addDialog.html';


class AddEmailController {
  constructor($mdDialog, $document) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.document = $document;
  }

  openDialog($event) {
    this.mdDialog.show({
      template,
      controller,
      controllerAs: '$ctrl',
      parent: this.document.body,
      targetEvent: $event,
      clickOutsideToClose:true,
    })
    .then(data => {
      this.returnData({ data: data });
    });
  }
}

export default AddEmailController;

