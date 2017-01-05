function multipleChartService(chartsFirebaseDataFactory) {'ngInject';
  chartsFirebaseDataFactory.then((res) => {
    let arr = res.charts.Multuple.map((val) => {
      return ({'date': val.date, 'Vlad': val.Vlad, 'Styopa': val.Styopa, 'Andy': val.Andy})
    });
    AmCharts.makeChart('multiple', {
      'type': 'serial',
      'theme': 'light',
      'legend': {
        'useGraphSettings': true
      },
      'dataProvider': arr,
      'valueAxes': [{
        'integersOnly': true,
        'axisAlpha': 0,
        'dashLength': 5,
        'gridCount': 10,
        'position': 'left',
        'title': 'Users statistic'
      }],
      'startDuration': 0.5,
      'graphs': [{
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'hidden': true,
        'title': 'Vlad',
        'valueField': 'Vlad',
        'fillAlphas': 0
      }, {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': 'Styopa',
        'valueField': 'Styopa',
        'fillAlphas': 0
      }, {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': 'Andy',
        'valueField': 'Andy',
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
    });
  });
};

export default multipleChartService;
