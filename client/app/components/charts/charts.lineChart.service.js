function lineChartService(chartsFirebaseDataFactory) {'ngInject';
  chartsFirebaseDataFactory.then((res) => {
    let arr = res.user.map((val) => {
      return { provider: val.name, letters: val.listOfEmails.length };
    });
    AmCharts.makeChart('linechart', {
      'type': 'serial',
      'theme': 'dark',
      'dataProvider': arr,
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
  });
};

export default lineChartService;
