import * as firebase from 'firebase';

function chartsFirebaseDataFactory($firebaseObject) {'ngInject';
  const ref = firebase.database().ref();
  const data = $firebaseObject(ref);

  return {
    firebChartData : firebChartData,
    columnFireData : columnFireData,
    lineFireData   : lineFireData,
    pieFireData    : pieFireData,
    multyFireData  : multyFireData
  };

  function firebChartData() {
    return data.$loaded().then((response) => {
      return response;
    });
  };
  function columnFireData() {
    return data.$loaded().then((response) => {
      let arr = [];
      for(let keys in response.email) {
        arr.push({'date': response.email[keys].date, 'value': response.email[keys].id});
      };
      return arr;
    });
  };
  function lineFireData() {
    return data.$loaded().then((response) => {
      return response.user.map((val) => {
        return { provider: val.name, letters: val.listOfEmails.length };
      });
    });
  };
  function pieFireData() {
    return data.$loaded().then((response) => {
      let arr = [];
      for(let keys in response.email) {
        arr.push({Group: response.email[keys].group, letters: response.email[keys].id});
      }
      return arr;
    });
  };
  function multyFireData() {
    return data.$loaded().then((response) => {
      let arr = response.charts.Multuple.map((val) => {
        return ({'date': val.date, 'Vlad': val.Vlad, 'Styopa': val.Styopa, 'Andy': val.Andy});
      });
      return arr;
    });
  };
};

export default chartsFirebaseDataFactory;
