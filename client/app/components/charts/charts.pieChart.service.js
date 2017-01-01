import * as firebase from "firebase";

function pieChartService(chartsFactory, $firebaseObject) {'ngInject';

    const ref = firebase.database().ref().child('email');
    const data = $firebaseObject(ref);
          let arr = [];
    data.$loaded().then(() => {
     data.forEach((val) => {
        arr.push({Group: val.group, letters: val.id})
    });
     console.warn(arr);

   }).catch((e) => {
      console.warn(e);
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

   });

};

export default pieChartService;
