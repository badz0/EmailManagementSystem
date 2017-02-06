import controller from './exportDialog/exportDialog.controller';
import template from './exportDialog/exportDialog.html';


class ExportTableController {
  constructor($mdDialog, $document,FiredbAutorisation) {
    'ngInject';
    this.mdDialog = $mdDialog;
    this.document = $document;
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
  }

  showWindow($event) {
    this.mdDialog.show({
      template,
      controller,
      controllerAs: '$ctrl',
      parent: this.document.body,
      targetEvent: $event,
      clickOutsideToClose:true,
    })
    
    .then(exportData => {
      this.onSetParam({ exportData: exportData });
    });
    
  }
}

export default ExportTableController;

