import * as firebase from 'firebase';

function multipleChartService(chartsFactory, $firebaseObject, $log) {'ngInject';
  let arr = [];
  const ref = firebase.database().ref().child('user');
  const data = $firebaseObject(ref);

  data.$loaded().then(() => {
    data.forEach((val) => {
      arr.push({ value: val.listOfEmails.length});
    });
    $log.log(arr);
  }).catch((e) => {
    $log.log(e);
  }).then(() => {
    AmCharts.makeChart('multiple', {
      'type': 'serial',
      'theme': 'light',
      'legend': {
        'useGraphSettings': true
      },
      'dataProvider': [ {
        'date': '2016-11-18',
        'Vlad': 1,
        'Styopa': 2,
        'Andy': 4,
        'Andrew': 2,
        'Ann': 7,
        'Kate': 0
      },{
        'date': '2016-11-19',
        'Vlad': 3,
        'Styopa': 12,
        'Andy': 5,
        'Andrew': 6,
        'Ann': 2,
        'Kate': 5
      },{
        'date': '2016-11-20',
        'Vlad': 3,
        'Styopa': 8,
        'Andy': 4,
        'Andrew': 2,
        'Ann': 7,
        'Kate': 4
      },{
        'date': '2016-11-21',
        'Vlad': 3,
        'Styopa': 2,
        'Andy': 4,
        'Andrew': 2,
        'Ann': 3,
        'Kate': 6
      },{
        'date': '2016-11-22',
        'Vlad': 6,
        'Styopa': 2,
        'Andy': 4,
        'Andrew': 2,
        'Ann': 7,
        'Kate': 6
      },{
        'date': '2016-11-23',
        'Vlad': 4,
        'Styopa': 7,
        'Andy': 5,
        'Andrew': 8,
        'Ann': 1,
        'Kate': 4
      },{
        'date': '2016-11-24',
        'Vlad': 4,
        'Styopa': 2,
        'Andy': 6,
        'Andrew': 5,
        'Ann': 7,
        'Kate': 2
      },{
        'date': '2016-11-25',
        'Vlad': 11,
        'Styopa': 9,
        'Andy': 6,
        'Andrew': 7,
        'Ann': 2,
        'Kate': 7
      }],
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
      }, {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': 'Andrew',
        'hidden': true,
        'valueField': 'Andrew',
        'fillAlphas': 0
      }, {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': 'Ann',
        'hidden': true,
        'valueField': 'Ann',
        'fillAlphas': 0
      }, {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': 'Kate',
        'hidden': true,
        'valueField': 'Kate',
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
  }).catch((e) => {
    $log.log(e);
  });
};

export default multipleChartService;
