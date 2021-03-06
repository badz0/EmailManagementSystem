class HardcodeConfigService {
  constructor() {
    this.configs = {
      buttons: {
        next: 'statistics.buttons.next',
        prev: 'statistics.buttons.prev'
      },
      userListButtons: {
        userGrid: 'Email Grid',
        userEmails: 'User Emails',
        userCharts: 'User Charts'
      },
      navBarButtons: {
        globalChartsStats: 'statistics.buttons.globalStat',
        defaultPageStats: 'Home Charts',
        perUserStats: 'User List Statistic'
      },
      navBarTitles: {
        global: 'statistics.header.headerGlob',
        home: 'Home Charts',
        perUser: 'statistics.header.headerUser'
      },
      tags: [
        {name: 'statistics.tags.tagThird', id: 'emailsMaxChart', label: 'statistics.tags.labelThree',
          status: true, value: 0},
        {name: 'statistics.tags.tagSecond', id: 'groupDataChart', label: 'statistics.tags.labelTwo',
          status: true, value: 1},
        {name: 'statistics.tags.tagFourth', id: 'multiple', label: 'statistics.tags.labelFour',
          status: true, value: 2},
        {name: 'statistics.tags.tagFifth', id: 'chartsActive', label: 'statistics.tags.labelFive',
          status: true, value: 3},
        {name: 'statistics.tags.tagSix', id: 'dateEmailStat', label: 'statistics.tags.labelSix',
          status: true, value: 4},
        {name: 'statistics.tags.tagFirst', id: 'userDateStat', label: 'statistics.tags.labelOne',
          status: true, value: 5}
      ],
      userListButtons: {
        gridButton: 'statistics.buttons.emailGrid',
        userEmails: 'statistics.buttons.emailsList',
        userCharts: 'statistics.buttons.userCharts'
      },
      dialogChartTitles: {
        group: 'statistics.dialog.group',
        emailActivity: 'statistics.dialog.emailActivity',
        recipient: 'statistics.dialog.recipient'
      },
      dialogListOfEmails: {
        date: 'Date: ',
        group: 'Group: ',
        sender: 'Sender: ',
        subject: 'Subject: ',
        content: 'Content: '
      },
      navBarDisplay: {
        globalChartsStats: false,
        defaultPageShow: true,
        usersLists: true
      },
      gridData: {
        enableFiltering: true,
        exporterMenuCsv: false,
        paginationPageSizes: [10, 25, 50],
        paginationPageSize: 12,
        enableGridMenu: true,
        columnDefs: [
          { name: 'recipient', field: 'recipient', width:200, enableFiltering: false},
          { name:'subject', field: 'subject', width:200, enableFiltering: false},
          { name:'date', field: 'date', width:100, enableFiltering: false},
          { name: 'group', enableCellEdit: true, field: 'group', width:100, enableFiltering: false},
          { name: 'content', field: 'content', width: 524, enableFiltering: false}
        ],
        enableGridMenu: true,
        enableSelectAll: true,
        exporterOlderExcelCompatibility: false,
        exporterCsvFilename: 'myFile.csv',
        exporterMenuCsv: true,
        exporterPdfFilename: 'grid.pdf',
        exporterPdfDefaultStyle: {fontSize: 9},
        exporterPdfTableStyle: {margin: [0, 10, 0, 10]},
        exporterPdfTableHeaderStyle: {fontSize: 10, bold: true, italics: true, color: 'black'},
        exporterPdfHeader: { text: 'List Of Emails', style: 'headerStyle' },
        exporterPdfCustomFormatter: function ( docDefinition ) {
          docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
          docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
          return docDefinition;
        },
        exporterPdfOrientation: 'portrait',
        exporterPdfPageSize: 'LETTER',
        exporterPdfMaxGridWidth: 500,
        exporterCsvLinkElement: angular.element(document.querySelectorAll('.custom-csv-link-location')),
        onRegisterApi: function(gridApi){
          this.gridApi = gridApi;
        }
      },
      chartsData: {
        groupData: {
          'type': 'pie',
          'theme': 'light',
          'dataProvider': [],
          'valueField': 'value',
          'titleField': 'group',
          'balloon':{
            'fixedPosition':true
          }
        },
        multipleUserCompare: {
          'type': 'serial',
          'theme': 'light',
          'legend': {
            'useGraphSettings': true
          },
          'dataProvider': [],
          'valueAxes': [{
            'integersOnly': true,
            'axisAlpha': 0,
            'dashLength': 5,
            'gridCount': 10,
            'position': 'left',
            'title': 'Users statistic'
          }],
          'startDuration': 0.5,
          'graphs': [],
          'chartCursor': {
            'cursorAlpha': 0,
            'zoomable': false
          },
          'categoryField': 'date',
          'categoryAxis': {
            'gridPosition': 'start',
            'axisAlpha': 0,
            'fillAlpha': 0.05,
            'fillColor': '#000000',
            'gridAlpha': 0,
            'position': 'top'
          }
        },
        userEmailDateCompare: {
          'type': 'serial',
          'theme': 'light',
          'legend': {
            'useGraphSettings': true
          },
          'dataProvider': [],
          'valueAxes': [{
            'integersOnly': true,
            'axisAlpha': 0,
            'dashLength': 5,
            'gridCount': 10,
            'position': 'left',
            'title': 'Users statistic'
          }],
          'startDuration': 0.5,
          'graphs': [],
          'chartCursor': {
            'cursorAlpha': 0,
            'zoomable': false
          },
          'categoryField': 'date',
          'categoryAxis': {
            'gridPosition': 'start',
            'axisAlpha': 0,
            'fillAlpha': 0.05,
            'fillColor': '#000000',
            'gridAlpha': 0,
            'position': 'top'
          }
        },
        emailsMaxLine: {
          'type': 'serial',
          'theme': 'light',
          'dataProvider': [],
          'valueAxes': [ {
            'gridColor': '#000000',
            'gridAlpha': 0.2,
            'dashLength': 0
          } ],
          'gridAboveGraphs': true,
          'startDuration': 1,
          'graphs': [ {
            'balloonText': '[[category]]: <b>[[value]]</b>',
            'fillAlphas': 2.8,
            'lineAlpha': 0.2,
            'type': 'column',
            'valueField': 'letters'
          } ],
          'chartCursor': {
            'categoryBalloonEnabled': false,
            'cursorAlpha': 0,
            'zoomable': false
          },
          'categoryField': 'provider',
          'categoryAxis': {
            'gridPosition': 'start',
            'gridAlpha': 0,
            'tickPosition': 'start',
            'tickLength': 5
          }
        },
        singnUpTimes: {
          'theme': 'light',
          'type': 'serial',
          'dataProvider': [],
          'categoryField': 'Login',
          'depth3D': 20,
          'angle': 30,

          'categoryAxis': {
            'labelRotation': 90,
            'gridPosition': 'start'
          },

          'valueAxes': [ {
            'title': 'Visitors'
          } ],

          'graphs': [ {
            'valueField': 'Activity',
            'type': 'column',
            'lineAlpha': 0.1,
            'fillAlphas': 1
          } ],

          'chartCursor': {
            'cursorAlpha': 0,
            'zoomable': false,
            'categoryBalloonEnabled': false
          }
        },
        emailDateStat: {
          'type': 'serial',
          'theme': 'light',
          'dataProvider': [],
          'valueAxes': [{
            'position': 'left',
            'title': 'Emails by day'
          }],
          'graphs': [{
            'id': 'g1',
            'fillAlphas': 0.4,
            'valueField': 'value',
            'balloonText': '<div style=\'margin:5px; font-size:19px;\'>Emails:<b>[[value]]</b></div>'
          }],
          'chartCursor': {
            'categoryBalloonDateFormat': 'DD MMMM',
            'cursorPosition': 'mouse'
          },
          'categoryField': 'date',
          'categoryAxis': {
            'minPeriod': 'mm',
            'parseDates': true
          },
          'export': {
            'enabled': true,
            'dateFormat': 'YYYY-MM-DD'
          }
        }
      },
      currentNavItem: 0,
      dialogChart: {
        dialogEmailDayStat: {
          'type': 'serial',
          'theme': 'light',
          'marginRight': 40,
          'marginLeft': 40,
          'autoMarginOffset': 20,
          'dataDateFormat': 'YYYY-MM-DD',
          'valueAxes': [ {
            'id': 'v1',
            'axisAlpha': 0,
            'position': 'left',
            'ignoreAxisWidth': true
          } ],
          'balloon': {
            'borderThickness': 1,
            'shadowAlpha': 0
          },
          'graphs': [ {
            'id': 'g1',
            'balloon': {
              'drop': true,
              'adjustBorderColor': false,
              'color': '#ffffff',
              'type': 'smoothedLine'
            },
            'fillAlphas': 0.2,
            'bullet': 'round',
            'bulletBorderAlpha': 1,
            'bulletColor': '#FFFFFF',
            'bulletSize': 5,
            'hideBulletsCount': 50,
            'lineThickness': 2,
            'title': 'red line',
            'useLineColorForBulletBorder': true,
            'valueField': 'value',
            'balloonText': '<span style=\'font-size:18px;\'>[[value]]</span>'
          } ],
          'chartCursor': {
            'valueLineEnabled': true,
            'valueLineBalloonEnabled': true,
            'cursorAlpha': 0,
            'zoomable': false,
            'valueZoomable': true,
            'valueLineAlpha': 0.5
          },
          'categoryField': 'date',
          'categoryAxis': {
            'parseDates': true,
            'dashLength': 1,
            'minorGridEnabled': true
          },
          'export': {
            'enabled': true
          },
          'dataProvider':  []
        },
        dialogGroupStat: {
          'type': 'serial',
          'theme': 'light',
          'dataProvider': [],
          'valueAxes': [ {
            'gridColor': '#000000',
            'dashLength': 0
          } ],
          'gridAboveGraphs': true,
          'startDuration': 0,
          'graphs': [ {
            'balloonText': '[[category]]: <b>[[value]]</b>',
            'fillAlphas': 2.8,
            'type': 'column',
            'valueField': 'value'
          } ],
          'chartCursor': {
            'categoryBalloonEnabled': false,
            'cursorAlpha': 0,
            'zoomable': false
          },
          'categoryField': 'group',
          'categoryAxis': {
            'gridPosition': 'start',
            'gridAlpha': 0,
            'tickPosition': 'start',
            'tickLength': 20
          }
        },
        dialogRecepientChart: {
          'type': 'serial',
          'theme': 'light',
          'dataProvider': [],
          'valueAxes': [{
            'position': 'left',
            'title': 'List of emails'
          }],
          'graphs': [{
            'id': 'g1',
            'fillAlphas': 0.4,
            'valueField': 'value'
          }],
          'chartCursor': {
            'cursorPosition': 'mouse'
          },
          'categoryField': 'recipient'
        },
      }
    };
  };
  configData() {
    return this.configs;
  }
};

export default HardcodeConfigService;
