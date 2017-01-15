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
        userCabinetColor: res.user[9].themeColor,
        signUpDay: this.sortChartData(res).signUpDay,
        emailsMaxLine: this.sortChartData(res).emailsMaxLine,
        singnUpTimes: this.sortChartData(res).signUp,
        groupData: this.chartsDataProvider('groupData', res, 'group'),
        emailDateStat: this.sortChartData(res).emailDateStat,
        multipleDataComapare: this.multipleDataComapare(res)
      };
    });
  };

  readResponseData(res) {
    return {
      signUpDay: res.user.map((val) => {
        return {'date': val.signUpDate, 'value': val.id, 'name': val.name};
      }),
      emailsMaxLine: res.user.map((val) => {
        return {'provider': val.name, 'letters': val.listOfEmails.length};
      }),
      signUp: res.user.map((val) => {
        return { 'Login': val.login, 'Activity': val.logInCount };
      }),
      groupData: this.groupData(res),
      emailDateStat: this.chartsArrayData(res, 'date', 'name'),
      multy: this.chartsArrayData(res, 'date', 'name')
    };
  };

  groupData(res) {
    let arr = [];
    res.user.forEach((val) => {
      val.listOfEmails.forEach((value) => {
        arr.push({'name': val.name, 'group': value.group});
      });
    });
    return arr;
  };

  chartsArrayData(res, keyOne, keyTwo) {
    let arr = [];
    res.user.forEach((val) => {
      val.listOfEmails.forEach((value) => {
        arr.push({[keyOne]: value[keyOne], [keyTwo]: val[keyTwo]});
      });
    });
    return arr;
  }

  sortChartData(res, type) {
    return {
      signUpDay: this.readResponseData(res).signUpDay.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      }),
      emailsMaxLine: this.readResponseData(res).emailsMaxLine.sort((a, b) => {
        return b.letters - a.letters;
      }),
      signUp: this.readResponseData(res).signUp.sort((a, b) => {
        return b.Activity - a.Activity;
      }).splice(0,5),
      emailDateStat: this.chartsDataProvider('emailDateStat', res, 'date').sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      })
    };
  };

  searchUnicData(type, res, key) {
    let arr = [];
    this.readResponseData(res)[type].forEach((val, i) => {
      if (arr.indexOf(val[key]) === -1) {
        arr.push(val[key]);
      };
    });
    return arr;
  };

  chartsDataProvider(type, res, key) {
    return this.searchUnicData(type, res, key).map((val) => {
      let count = 0;
      this.readResponseData(res)[type].forEach((inElemVal) => {
        if(val === inElemVal[key]) {
          count += 1;
        };
      });
      return {[key]: val, value: count};
    });
  };

  compileMultyData(res) {
    let users = {};
    this.searchUnicData('multy', res, 'name').forEach((val) => {
      users[val] = val;
    });
    return users;
  };
  multySortData(res) {
    return this.searchUnicData('multy',  res, 'date').sort((a, b) => {
      return new Date(a) - new Date(b);
    });
  };

  multipleDataComapare(res) {
    let finalData = [];
    const users = this.compileMultyData(res);
    this.multySortData(res).map((val) => {
      let [countA, countB, countC] = [0, 0, 0];
      this.readResponseData(res).multy.forEach((value) => {
        if (val === value.date) {
          if(value.name === users.Ivanna) {
            countA++;
          }
          if (value.name === users.Svitlana) {
            countB++;
          }
          if (value.name === users.Dennis) {
            countC++;
          }
        }
      });
      finalData.push({ 'date': val, [users.Ivanna]: countA, [users.Svitlana]: countB, [users.Dennis]: countC});
    });
    return finalData;
  };
};

export default GlobalHardcodeConfigService;
