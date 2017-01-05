function pieChartService(chartsFirebaseDataFactory) {'ngInject';
  chartsFirebaseDataFactory.then((res) => {
    let arr = [];
    for(let keys in res.email) {
      arr.push({Group: res.email[keys].group, letters: res.email[keys].id});
    }
    AmCharts.makeChart('piechart', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': arr,
      'valueField': 'letters',
      'titleField': 'Group',
      'balloon':{
        'fixedPosition':true
      }});
  });
};

export default pieChartService;
