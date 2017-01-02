function pieChartService($log, chartsFirebaseDataFactory) {'ngInject';
  chartsFirebaseDataFactory.pieChart().then((res) => {
    AmCharts.makeChart('piechart', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': res,
      'valueField': 'letters',
      'titleField': 'Group',
      'balloon':{
        'fixedPosition':true
      }});
  }).catch((e) => {
    $log.log(e);
  });
};

export default pieChartService;
