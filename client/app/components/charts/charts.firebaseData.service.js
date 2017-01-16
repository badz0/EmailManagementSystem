import * as firebase from 'firebase';

class ChartsFirebaseDataService {
  constructor($firebaseObject, $log, GlobalHardcodeConfigService) {'ngInject';
    const ref = firebase.database().ref();
    this.data = $firebaseObject(ref);
    this.globalChartsData = GlobalHardcodeConfigService.configData();
  };

  chartsDataBuild() {
    return this.data.$loaded().then((res) => {
      return {
        firedbChartData: res,
        userCabinetColor: res.user[9].themeColor,
        uniqueUsersList: this.compileMultyData(res),
        signUpDay: this.sortChartData(res).signUpDay,
        emailsMaxLine: this.sortChartData(res).emailsMaxLine,
        singnUpTimes: this.sortChartData(res).signUp,
        groupData: this.chartsDataProvider('groupData', res, 'group'),
        emailDateStat: this.sortChartData(res).emailDateStat,
        multipleUserComapare: this.multipleUserComapare(res)
      };
    }).catch((e) => {
      console.log(e)
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

  multipleChartsData(date, users) {
    let data = {'date': date};
    users.forEach((value, index) => {
      data[value.name] = value.index;
    });
    this.chartsGraphsData(users);
    return data;
  };

  chartsGraphsData(users) {
    let data = [];
    users.forEach((val) => {
      let obj = {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': '',
        'valueField': '',
        'fillAlphas': 0
      };
      obj.title = val.name;
      obj.valueField = val.name;
      data.push(obj);
    });
    this.globalChartsData.chartsData.multipleUserComapare.graphs = data;
  };

  compileMultyData(res) {
    return this.searchUnicData('multy', res, 'name').map((val) => {
      return ({'name': val, 'index': 0});
    });
  };
  // anotherData()
  multySortData(res) {
    return this.searchUnicData('multy',  res, 'date').sort((a, b) => {
      return new Date(a) - new Date(b);
    });
  };

  multipleUserComapare(res) {
    let finalData = [];
    this.multySortData(res).forEach((val) => {
      let users = this.compileMultyData(res);
      this.readResponseData(res).multy.forEach((value) => {
        if(val === value.date) {
          users.forEach((changes) => {
            if(value.name === changes.name) {
              changes.index += 1;
            }
          });
        }
      });
      finalData.push(this.multipleChartsData(val, users));
    });
    return finalData;
  };
};

export default ChartsFirebaseDataService;
