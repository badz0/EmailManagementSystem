function globalHardcodeConfigFactory() {
  return {
    buttons: {
      next: 'Next',
      prev: 'Prev'
    },
    tags: [
      {name: 'Users SignUp statistics', id: 'columnchart', label: 'Column Chart',
        status: true, value: 0},
      {name: 'Sorted by Groups', id: 'piechart', label: 'Groups',
        status: true, value: 1},
      {name: 'Sorted by received emails amout', id: 'linechart', label: 'Users',
        status: true, value: 2},
      {name: 'Muliple Charts example', id: 'multiple', label: 'Compare Statistics',
        status: true, value: 3},
      {name: 'Most Active Users', id: 'chartsActive', label: 'Activity',
        status: true, value: 4},
      {name: 'Most Active Users', id: 'dateEmailStat', label: 'Activity',
        status: true, value: 5}
    ],
    currentNavItem: 0,
    someChart: {
      'type': 'serial',
      'theme': 'dark',
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
    anotherChart: {
      'type': 'serial',
      'theme': 'dark',
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
    pie: {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': [],
      'valueField': 'value',
      'titleField': 'Group',
      'balloon':{
        'fixedPosition':true
      }
    },
    columnChart: {
      'type': 'serial',
      'theme': 'light',
      'autoMarginOffset': 20,
      'dataDateFormat': 'YYYY-MM-DD',
      'valueAxes': [{
        'id': 'v1',
        'axisAlpha': 0,
        'position': 'left',
        'ignoreAxisWidth':true
      }],
      'balloon': {
        'borderThickness': 1,
        'shadowAlpha': 0
      },
      'graphs': [{
        'id': 'g1',
        'balloon':{
          'drop':true,
          'adjustBorderColor':false,
          'color':'#ffffff'
        },
        'bullet': 'round',
        'bulletBorderAlpha': 1,
        'bulletColor': '#FFFFFF',
        'bulletSize': 2,
        'hideBulletsCount': 50,
        'lineThickness': 1,
        'title': 'red line',
        'useLineColorForBulletBorder': true,
        'valueField': 'value',
        'balloonText': '<span style=\'font-size:12px;\'>[[name]]</span>'
      }],
      'chartCursor': {
        'pan': true,
        'valueLineEnabled': true,
        'valueLineBalloonEnabled': true,
        'cursorAlpha':1,
        'cursorColor':'#009688',
        'limitToGraph':'g1',
        'valueLineAlpha':0.2,
        'valueZoomable':true
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
      'dataProvider': []
    },
    multiple: {
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
      'graphs': [ {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': 'Ivanna',
        'valueField': 'Ivanna',
        'fillAlphas': 0
      }, {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': 'Svitlana',
        'valueField': 'Svitlana',
        'fillAlphas': 0
      }, {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': 'Dennis',
        'valueField': 'Dennis',
        'fillAlphas': 0
      }],
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
    lineChart: {
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
        'tickLength': 20
      }
    },
    chartsActive: {
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
    chartsActive2: {
      'type': 'serial',
      'theme': 'dark',
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
    emailDateSat: {
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
  };
};

export default globalHardcodeConfigFactory;
