import configs from './lineChart.configData.js';
import * as firebase from "firebase";

class LineChartController {
  constructor(chartsFactory, $firebaseObject) {'ngInject'
    this.name = 'Emails amout sorted by group';

    const ref = firebase.database().ref().child('email');
    this.name = 'Hello from Firebase';
    const data = $firebaseObject(ref);
    data.$loaded().then(() => {
      let arr = [];
    //   data.on('value', snap =>  {
    //     for (let key in snap.val())  {
    //       arr.push(snap.val()[key]);
    //     }
     data.forEach((val) => {
        arr.push({Group: val.group, letters: val.id})
    });
      AmCharts.makeChart('linechart', {
    'type': 'pie',
    'theme': 'light',
    'dataProvider': arr,
    'valueField': 'letters',
    'titleField': 'Group',
    'balloon':{
      'fixedPosition':true
  }});
   })


  }

}

export default LineChartController;

