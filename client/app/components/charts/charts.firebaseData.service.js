import * as firebase from 'firebase';

class GlobalHardcodeConfigService {
  constructor($firebaseObject, $log) {'ngInject';
    const ref = firebase.database().ref();
    this.data = $firebaseObject(ref);
  };

  chartsDataBuild() {
    return this.data.$loaded().then((res) => {
      return {
        firedbChartData: res,
        signUpDay: this.sortChartData('signUpDay', res),
        emailsMaxLine: this.sortChartData('emailsMaxLine', res),
        singnUpTimes: this.sortChartData('SignUp', res).splice(0,7),
        groupData: this.chartsDataProvider('groupData', res, 'Group'),
        emailDateStat: this.sortChartData('Date', res),
        multipleDataComapare: this.multipleDataComapare(res)
      };
    });
  };

  readResponseData(type, res) {
    if (type === 'groupData') {
      let arr = [];
      res.user.forEach((val) => {
        val.listOfEmails.forEach((value) => {
          arr.push({'name': val.name, 'Group': value.group});
        });
      });
      return arr;
    } else if (type === 'Date') {
      let arr = [];
      res.user.forEach((val) => {
        val.listOfEmails.forEach((value) => {
          arr.push({date: value.date, name: val.name});
        });
      });
      return arr;
    } else if (type === 'Multy') {
      let arr = [];
      res.user.forEach((val) => {
        val.listOfEmails.forEach((value) => {
          arr.push({date: value.date, name: val.name});
        });
      });
      return arr;
    }

    return {
      signUpDay(res) {
        return res.user.map((val) => {
          return {date: val.signUpDate, value: val.id, name: val.name};
        });
      },
      emailsMaxLine(res) {
        return res.user.map((val) => {
          return {provider: val.name, letters: val.listOfEmails.length};
        });
      },
      groupData(res) {
        let arr = [];
        res.user.forEach((val) => {
          val.listOfEmails.forEach((value) => {
            arr.push({name: val.name, Group: value.group});
          });
        });
        return arr;
      },
      date(res) {
        let arr = [];
        res.user.forEach((val) => {
          val.listOfEmails.forEach((value) => {
            arr.push({date: value.date, name: val.name});
          });
        });
        return arr;
      },
      signUp(res) {
        return res.user.map((val) => {
          return { Login: val.login, Activity: val.logInCount };
        });
      },
      multy(res) {
        let arr = [];
        res.user.forEach((val) => {
          val.listOfEmails.forEach((value) => {
            arr.push({date: value.date, name: val.name});
          });
        });
        return arr;
      }
    };
  };

  sortChartData(type, res, key) {
    if(type === 'signUpDay') {
      return this.readResponseData().signUpDay(res).sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    } else if(type === 'emailsMaxLine') {
      return this.readResponseData().emailsMaxLine(res).sort((a, b) => {
        return b.letters - a.letters;
      });
    } else if(type === 'SignUp') {
      return this.readResponseData().signUp(res).sort((a, b) => {
        return b.Activity - a.Activity;
      });
    } else if(type === 'Date') {
      return this.chartsDataProvider('Date', res, 'date').sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
    }
  };

  searchUnicData(type, res, key) {
    let arr = [];
    this.readResponseData(type, res).forEach((val, i) => {
      if (arr.indexOf(val[key]) === -1) {
        arr.push(val[key]);
      };
    });
    return arr;
  };

  chartsDataProvider(type, res, key) {
    return this.searchUnicData(type, res, key).map((val) => {
      let integer = 0;
      this.readResponseData(type, res).map((inElemVal) => {
        if(val === inElemVal[key]) {
          integer += 1;
        };
      });
      return {[key]: val, value: integer};
    });
  };

  multipleDataComapare(res) {
    let user = this.searchUnicData('Multy',  res, 'name');
    let finalData = [];
    this.searchUnicData('Multy',  res, 'date').sort((a, b) => {
      return new Date(a) - new Date(b);
    }).map((val) => {
      let [a, b, c] = [user[0], user[1], user[3]];
      let countA = 0;
      let countB = 0;
      let countC = 0;
      this.readResponseData('Multy',  res).map((value) => {
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
      finalData.push({ 'date': val, [user[0]]: countA, [user[1]]: countB, [user[3]]: countC});
    });
    return finalData;
  };
};

export default GlobalHardcodeConfigService;




