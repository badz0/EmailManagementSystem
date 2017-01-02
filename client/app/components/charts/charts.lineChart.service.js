function lineChartService($log, chartsFirebaseDataFactory) {'ngInject';
  chartsFirebaseDataFactory.lineChart().then((res) => {
    AmCharts.makeChart('linechart', {
      'type': 'serial',
      'theme': 'dark',
      'dataProvider': res,
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
    });
  }).catch((e) => {
    $log.log(e);;
  });
};

export default lineChartService;
