class UserTableController {
  constructor(FiredbAutorisation, $scope) {
    'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });

    this.users = this.FiredbAutorisation.getUserDetails();
    this.scope = $scope;

  
    this.gridOptions = {
      enableFiltering: true,
      exporterMenuCsv: true,
      enableGridMenu: true,
      enableSorting: true,
      enableSelectAll: true,
      exporterOlderExcelCompatibility: true,
      exporterCsvFilename: 'userDetails.csv',
      exporterPdfDefaultStyle: {fontSize: 9},
      exporterPdfTableStyle: {margin: [30, 30, 30, 30]},
      exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'blue'},
      exporterPdfHeader: { text: 'Users Details Table', style: 'headerStyle' },
      exporterPdfFooter: function ( currentPage, pageCount ) {
        return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
      },
      exporterPdfCustomFormatter: function ( docDefinition ) {
        docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
        docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
        return docDefinition;
      },
      exporterPdfOrientation: 'landscape',
      exporterPdfPageSize: 'LETTER',
      exporterPdfMaxGridWidth: 600,
      exporterCsvLinkElement: angular.element(document.querySelectorAll('.custom-csv-link-location')),

      onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
        
      },

      columnDefs: [
          { name:'Name', enableSorting: true, field: 'name'},
          { name:'Surname', enableSorting: true, field: 'surname'},
          { name:'Nickname', enableSorting: true,  field: 'login'},
          { name:'Birth Date', enableSorting: true, field: 'birthDate'},
          { name:'Email', enableSorting: true, width:230, field: 'email'},
          { name:'Country', enableSorting: true, field: 'country'},
          { name:'City', enableSorting: true, field: 'city'},
          { name:'Registration date', enableSorting: true, width:150, field: 'signUpDate'},
          { name:'Number of Inputs', enableSorting: true, width:200,  field: 'logInCount'},


      ],
      data: this.users
    };

  }

  
  export(exportData){
    this.export_format = exportData.format;
    this.export_column_typee = exportData.column;
    this.export_row_type = exportData.raw;
    let myElement;

    this.export_format === 'csv'? (myElement = angular.element(document.querySelectorAll('.custom-csv-link-location')),
    this.scope.gridApi.exporter.csvExport( this.export_row_type, this.export_column_type, myElement )) :
    (this.scope.gridApi.exporter.pdfExport( this.export_row_type, this.export_column_type ));
  
  };
 
  }

export default UserTableController; 
