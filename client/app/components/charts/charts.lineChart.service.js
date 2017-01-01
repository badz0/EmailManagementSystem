import * as firebase from "firebase";

function lineChartService(chartsFactory, $firebaseObject) {'ngInject';
let arr = [];
  const ref = firebase.database().ref().child('user');
  const data = $firebaseObject(ref);

  data.$loaded().then(() => {
    data.forEach((val) => {
      arr.push({ value: val.listOfEmails.length});
    });
      console.log(arr);
   }).catch((e) => {
      console.log(e);
   }).then(() => {
      AmCharts.makeChart('linechart', {
        'type': 'serial',
        'theme': 'dark',
        'dataProvider': [ {
          'provider': 'Twitter',
          'letters': 1809
        }, {
          'provider': 'Facebook',
          'letters': 1322
        }, {
          'provider': 'Family',
          'letters': 1122
        }, {
          'provider': 'Work',
          'letters': 1114
        }, {
          'provider': 'Personal',
          'letters': 984
        }, {
          'provider': 'Spam',
          'letters': 711
        }, {
          'provider': 'Deleted',
          'letters': 665
        }, {
          'provider': 'Arhived',
          'letters': 580
        }],
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
   });
};

export default lineChartService;
