import * as firebase from 'firebase';

function pieChartService(chartsFactory, $firebaseObject, $log) {'ngInject';

  const ref = firebase.database().ref().child('email');
  const data = $firebaseObject(ref);
  let arr = [];
  data.$loaded().then(() => {
    data.forEach((val) => {
      arr.push({Group: val.group, letters: val.id});
    });
    $log.log(arr);
  }).catch((e) => {
    $log.log(e);
  }).then(() => {
    AmCharts.makeChart('piechart', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': arr,
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
