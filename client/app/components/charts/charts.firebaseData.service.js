import * as firebase from 'firebase';

class chartsFirebaseDataFactory {
  constructor($firebaseObject) {'ngInject';
    const ref = firebase.database().ref();
    this.data = $firebaseObject(ref);
  };

  chartsDataBuild() {
    return this.data.$loaded().then((res) => {
      return {
        columnFireData: this.sortChartData('Column', res),
        lineFireData: this.sortChartData('Line', res),
        singnUpTimes: this.sortChartData('SignUp', res).splice(0,7),
        pieFireData: this.chartsDataProvider('Pie', res, 'Group', 'name', 'name', 'Group', 'group'),
        dateEmailStat: this.sortChartData('Date', res),
        firedbChartData: this.firedbChartData(res),
        multyFireData: this.multyFireData(res)
      };
    });
  };

  firedbChartData(res) {
    return res;
  };

  readResponseData(type, res, key1, val1, key2, val2, key3, val3) {
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

  sortChartData(type, res) {
    if(type === 'Column') {
      return this.readResponseData(type, res, 'date', 'signUpDate', 'value', 'id', 'name', 'name').sort((a, b) => {
        // return a.date > b.date;
        return new Date(a.date) - new Date(b.date);

      });
    } else if(type === 'Line') {
      return this.readResponseData(type, res, 'provider', 'name', 'letters', 'listOfEmails').sort((a, b) => {
        return b.letters - a.letters;
      });
    } else if(type === 'SignUp') {
      return this.readResponseData(type, res, 'Login', 'login', 'Activity', 'logInCount').sort((a, b) => {
        return b.Activity - a.Activity;
      });
    } else if(type === 'Date') {
      return this.chartsDataProvider('Date', res, 'date', 'date', 'date', 'name', 'name').sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    }
  };

  searchUnicData(type, res, key, key1, val1, key2, val2) {
    let arr = [];
    this.readResponseData(type, res, key1, val1, key2, val2).forEach((val, i) => {
      if (arr.indexOf(val[key]) === -1) {
        arr.push(val[key]);
      };
    });
    return arr;
  };

  chartsDataProvider(type, res, key, key1, val1, key2, val2) {
    //console.log('UNICUE', this.searchUnicData(type, res, key, key1, val1, key2, val2));
    return this.searchUnicData(type, res, key, key1, val1, key2, val2).map((val) => {
      let integer = 0;
      this.readResponseData(type, res, key1, val1, key2, val2).map((inElemVal) => {
        if(val === inElemVal[key]) {
          integer += 1;
        };
      });
      return {[key]: val, value: integer};
    });
  };

  multyFireData(res) {

    console.log('asdaasd',  this.searchUnicData('Multy',  res, 'date', 'date', 'date', 'name', 'name').sort((a, b) => {
      return new Date(a) - new Date(b);
    }));
    console.log('asdaasd', this.searchUnicData('Multy',  res, 'name', 'date', 'date', 'name', 'name'));
    let arr1 = this.searchUnicData('Multy',  res, 'date', 'date', 'date', 'name', 'name').sort((a, b) => {
      return new Date(a) - new Date(b);
    });
    this.readResponseData('Multy',  res, 'name', 'date', 'date', 'name', 'name');
    let arr2 = this.searchUnicData('Multy',  res, 'name', 'date', 'date', 'name', 'name');
    let arr3 = this.readResponseData('Multy',  res, 'date', 'date', 'name', 'name');
    console.log('NAME', arr2[2]);
    let finalData = [];
    this.searchUnicData('Multy',  res, 'date', 'date', 'date', 'name', 'name').sort((a, b) => {
      return new Date(a) - new Date(b);
    }).map((val) => {
      let [a, b, c] = [arr2[0], arr2[1], arr2[3]];
      let countA = 0;
      let countB = 0;
      let countC = 0;
      this.readResponseData('Multy',  res, 'date', 'date', 'name', 'name').map((value) => {
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

  };
};

export default chartsFirebaseDataFactory;
