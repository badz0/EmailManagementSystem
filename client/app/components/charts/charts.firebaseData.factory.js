import * as firebase from 'firebase';

function chartsFirebaseDataFactory($firebaseObject) {'ngInject';
  const ref = firebase.database().ref();
  const data = $firebaseObject(ref);

  return {
    firedbChartData : firedbChartData,
    columnFireData : columnFireData,
    lineFireData   : lineFireData,
    pieFireData    : pieFireData,
    multyFireData  : multyFireData,
    singnUpTimes   : singnUpTimes,
    dateEmailStat  : dateEmailStat
  };

  function firedbChartData() {
    return data.$loaded().then((res) => {
      console.log(res);
      return res;
    });
  };
  function readResponseData(type, res, key1, val1, key2, val2, key3, val3) {
    if(type === 'Column') {
      return res.user.map((val) => {
        return {[key1]: val[val1], [key2]: val[val2], [key3]: val[val3]};
      });
    } else if(type === 'Line') {
      return res.user.map((val) => {
        return {[key1]: val[val1], [key2]: val[val2].length};
      });
    } else if (type === 'Pie') {
      let arr = [];
      res.user.map((val) => {
        val.listOfEmails.map((value) => {
          arr.push({'name': val.name, 'Group': value.group});
        });
      });
      return arr;
    } else if (type === 'SignUp') {
      return res.user.map((val) => {
        return {[key1]: val[val1], [key2]: val[val2]};
      });
    } else if (type === 'Date') {
      let arr = [];
      res.user.map((val) => {
        val.listOfEmails.map((value) => {
          arr.push({[key1]: value[val1], [key2]: val[val2]});
        });
      });
      return arr;
    } else if (type === 'Multy') {
      let arr = [];
      res.user.map((val) => {
        val.listOfEmails.map((value) => {
          arr.push({[key1]: value[val1], [key2]: val[val2]});
        });
      });
      return arr;
    }
  };
  function sortChartData(type, res) {
    if(type === 'Column') {
      return readResponseData(type, res, 'date', 'signUpDate', 'value', 'id', 'name', 'name').sort((a, b) => {
        return a.date > b.date;
      });
    } else if(type === 'Line') {
      return readResponseData(type, res, 'provider', 'name', 'letters', 'listOfEmails').sort((a, b) => {
        return b.letters - a.letters;
      });
    } else if(type === 'SignUp') {
      return readResponseData(type, res, 'Login', 'login', 'Activity', 'logInCount').sort((a, b) => {
        return b.Activity - a.Activity;
      });
    } else if(type === 'Date') {
      return chartsDataProvider('Date', res, 'date', 'date', 'date', 'name', 'name').sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    }
  };
  function searchUnicData(type, res, key, key1, val1, key2, val2) {
    let arr = [];
    readResponseData(type, res, key1, val1, key2, val2).map((val, i) => {
      if (arr.indexOf(val[key]) === -1) {
        arr.push(val[key]);
      };
    });
    return arr;
  };
  function chartsDataProvider(type, res, key, key1, val1, key2, val2) {
    console.log('UNICUE', searchUnicData(type, res, key, key1, val1, key2, val2));
    return searchUnicData(type, res, key, key1, val1, key2, val2).map((val) => {
      let integer = 0;
      readResponseData(type, res, key1, val1, key2, val2).map((inElemVal) => {
        if(val === inElemVal[key]) {
          integer += 1;
        };
      });
      return {[key]: val, value: integer};
    });
  };

  function columnFireData() {
    return data.$loaded().then((res) => {
      return sortChartData('Column', res);
    });
  };
  function lineFireData() {
    return data.$loaded().then((res) => {
      return sortChartData('Line', res);
    });
  };
  function singnUpTimes() {
    return data.$loaded().then((res) => {
      return sortChartData('SignUp', res).splice(0,7);
    });
  };
  function pieFireData() {
    return data.$loaded().then((res) => {
      return chartsDataProvider('Pie', res, 'Group', 'name', 'name', 'Group', 'group');
    });
  };
  function dateEmailStat() {
    return data.$loaded().then((res) => {
      return sortChartData('Date', res);
    });
  };
  function multyFireData() {
    return data.$loaded().then((res) => {
      console.log('asdaasd',  searchUnicData('Multy',  res, 'date', 'date', 'date', 'name', 'name').sort((a, b) => {
        return new Date(a) - new Date(b);
      }));
      console.log('asdaasd', searchUnicData('Multy',  res, 'name', 'date', 'date', 'name', 'name'));
      let arr1 = searchUnicData('Multy',  res, 'date', 'date', 'date', 'name', 'name').sort((a, b) => {
        return new Date(a) - new Date(b);
      });
      readResponseData('Multy',  res, 'name', 'date', 'date', 'name', 'name');
      let arr2 = searchUnicData('Multy',  res, 'name', 'date', 'date', 'name', 'name');
      let arr3 = readResponseData('Multy',  res, 'date', 'date', 'name', 'name');
      console.log('NAME', arr2[2]);
      let finalData = [];
      searchUnicData('Multy',  res, 'date', 'date', 'date', 'name', 'name').sort((a, b) => {
        return new Date(a) - new Date(b);
      }).map((val) => {
        let [a, b, c] = [arr2[0], arr2[1], arr2[3]];
        let countA = 0;
        let countB = 0;
        let countC = 0;
        readResponseData('Multy',  res, 'date', 'date', 'name', 'name').map((value) => {
          if (val === value.date) {
            if(value.name === a) {
              countA++;
            }
            if (value.name === b) {
              countB++;
            }
            if (value.name === c) {
              countC++;
            }
          }
        });
        finalData.push({ 'date': val, [arr2[0]]: countA, [arr2[1]]: countB, [arr2[3]]: countC});
      });
      console.log('FINAL DATA', finalData);
      return finalData;
    }).catch((e) => {
      console.log(e);
    });
  };
};

export default chartsFirebaseDataFactory;
