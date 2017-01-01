import configs from './columnChart.configData.js';
import * as firebase from "firebase";

class ColumnChartController {
  constructor(chartsFactory, $firebaseObject) {'ngInject';
    this.name = 'All received emails sorted by amound and day income';
   // AmCharts.makeChart('columnchart', chartsFactory.columnChart());
console.log(chartsFactory.columnChart())
  const ref = firebase.database().ref().child('user');
    this.name = 'Hello from Firebase';
    const data = $firebaseObject(ref);
    console.log(data);
    data.$loaded().then(() => {
      let arr = [];
      data.on('value', snap =>  {
         for (let key in snap.val())  {
           arr.push(snap.val()[key].birthDate);
          }
       data.forEach((val) => {
          arr.push({'date': val.birthDate});
      });
       console.log(arr)


   });
     console.log(arr);
      AmCharts.makeChart('columnchart', {
  'type': 'serial',
  'theme': 'light',
  'marginRight': 40,
  'marginLeft': 40,
  'autoMarginOffset': 20,
  'mouseWheelZoomEnabled':true,
  'dataDateFormat': 'DD.MM.YYYY',
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
  'dataProvider': arr
});
     console.log(arr)
   })

    }
  }



export default ColumnChartController;
