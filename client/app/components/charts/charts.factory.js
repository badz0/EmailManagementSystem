function chartsFactory() {
  const items = [
    {id: 1, label: 'Item 0'},
    {id: 2, label: 'Item 1'}
  ];
  const lineChart = {
    'type': 'pie',
    'theme': 'light',
    'dataProvider': [ {
      'Group': 'Group 1',
      'letters': 500
    }, {
      'Group': 'Group 2',
      'letters': 312
    }, {
      'Group': 'Group 3',
      'letters': 201
    }, {
      'Group': 'Group 4',
      'letters': 165
    }, {
      'Group': 'Group 5',
      'letters': 139
    }, {
      'Group': 'Group 6',
      'letters': 128
    }, {
      'Group': 'Group 7',
      'letters': 99
    }, {
      'Group': 'Group 8',
      'letters': 600
    } ],
    'valueField': 'letters',
    'titleField': 'Group',
    'balloon':{
      'fixedPosition':true
  }};
  const columnChart = {
  'type': 'serial',
  'theme': 'light',
  'marginRight': 40,
  'marginLeft': 40,
  'autoMarginOffset': 20,
  'mouseWheelZoomEnabled':true,
  'dataDateFormat': 'YYYY-MM-DD',
  'valueAxes': [{
    'id': 'v1',
    'axisAlpha': 0,
    'position': 'left',
    'ignoreAxisWidth':true
  }],
  'balloon': {
    'borderThickness': 2,
    'shadowAlpha': 1
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
    'bulletColor': '#000000',
    'bulletSize': 5,
    'hideBulletsCount': 50,
    'lineThickness': 2,
    'title': 'red line',
    'useLineColorForBulletBorder': true,
    'valueField': 'value',
    'balloonText': '<span style=\'font-size:12px;\'>[[value]] letter</span>'
  }],
  'chartCursor': {
    'pan': true,
    'valueLineEnabled': true,
    'valueLineBalloonEnabled': true,
    'cursorAlpha':1,
    'cursorColor':'#258cbb',
    'limitToGraph':'g1',
    'valueLineAlpha':0.2
  },
  'categoryField': 'date',
  'categoryAxis': {
    'parseDates': true,
    'dashLength': 1
  },
  'dataProvider': [{
    'date': '2016-11-18',
    'value': 8
  }, {
    'date': '2016-11-19',
    'value': 30
  }, {
    'date': '2016-11-20',
    'value': 43
  }, {
    'date': '2016-11-21',
    'value': 60
  }, {
    'date': '2016-11-22',
    'value': 24
  }, {
    'date': '2016-11-23',
    'value': 22
  }, {
    'date': '2016-11-24',
    'value': 73
  }, {
    'date': '2016-11-25',
    'value': 25
  }, {
    'date': '2016-11-26',
    'value': 50
  }, {
    'date': '2016-11-27',
    'value': 30
  }, {
    'date': '2016-11-28',
    'value': 17
  }, {
    'date': '2016-11-29',
    'value': 3
  }, {
    'date': '2016-11-30',
    'value': 61
  }, {
    'date': '2016-12-01',
    'value': 62
  }, {
    'date': '2016-12-02',
    'value': 66
  }, {
    'date': '2016-12-03',
    'value': 65
  }, {
    'date': '2016-12-04',
    'value': 33
  }, {
    'date': '2016-12-05',
    'value': 49
  }, {
    'date': '2016-12-06',
    'value': 78
  }, {
    'date': '2016-12-07',
    'value': 78
  }, {
    'date': '2016-12-08',
    'value': 78
  }, {
    'date': '2016-12-09',
    'value': 54
  }, {
    'date': '2016-12-10',
    'value': 63
  }, {
    'date': '2016-12-11',
    'value': 55
  }, {
    'date': '2016-12-12',
    'value': 60
  }, {
    'date': '2016-12-13',
    'value': 77
  }]
};
  return {
    list() {
      return items;
    },
    lineChart() {
      return lineChart;
    },
    columnChart() {
      return columnChart;
    }
  };
}

export default chartsFactory;