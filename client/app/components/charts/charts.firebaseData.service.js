class ChartsFirebaseDataService {
  constructor(HardcodeConfigService, FiredbAutorisation) {'ngInject';
    this.globalChartsData = HardcodeConfigService.configData();
    this.FiredbAutorisation = FiredbAutorisation;
  };

  chartsDataBuild() {
    return this.FiredbAutorisation.fireDBResponseData().$loaded()
      .then(response => {
        return {
          firedbChartData: response,
          emailsMaxLine: this.sortChartData(response).emailsMaxLine,
          singnUpTimes: this.sortChartData(response).signUp,
          groupData: this.chartsDataProvider('groupData', response, 'group'),
          emailDateStat: this.sortChartData(response).emailDateStat,
          userEmailDateCompare: this.userEmailDateCompare(response),
          multipleUserCompare: this.multipleUserCompare(response)
        };
      });
  };

  readResponseData(response) {
    return {
      emailsMaxLine:
        response.user.map(user => {
          return {'provider': user.name, 'letters': user.listOfEmails.length};
        }),
      signUp:
        response.user.map(user => {
          return { 'Login': user.login, 'Activity': user.logInCount };
        }),
      groupData: this.groupData(response),
      emailDateStat: this.chartsArrayData(response, 'date', 'name'),
      multyCompareStat: this.chartsArrayData(response, 'date', 'name')
    };
  };

  groupData(response) {
    let arr = [];
    response.user.forEach(eachUser => {
      eachUser.listOfEmails.forEach(letters => {
        arr.push({'name': eachUser.name, 'group': letters.group});
      });
    });
    return arr;
  };

  chartsArrayData(response, keyOne, keyTwo) {
    let arr = [];
    response.user.forEach(users => {
      users.listOfEmails.forEach(letter => {
        arr.push({[keyOne]: letter[keyOne], [keyTwo]: users[keyTwo]});
      });
    });
    return arr;
  }

  sortChartData(response) {
    return {
      emailsMaxLine: this.readResponseData(response).emailsMaxLine.sort((a, b) => {
        return b.letters - a.letters;
      }),
      signUp: this.readResponseData(response).signUp.sort((a, b) => {
        return b.Activity - a.Activity;
      }).splice(0, 5),
      emailDateStat: this.chartsDataProvider('emailDateStat', response, 'date').sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      })
    };
  };

  searchUnicData(type, response, key) {
    let arr = [];
    this.readResponseData(response)[type].forEach((unicValue, i) => {
      if (arr.indexOf(unicValue[key]) === -1) {
        arr.push(unicValue[key]);
      }
    });
    return arr;
  };

  chartsDataProvider(type, response, key) {
    return this.searchUnicData(type, response, key).map(unicElem => {
      let count = 0;
      this.readResponseData(response)[type].forEach(inElemVal => {
        if(unicElem === inElemVal[key]) {
          count += 1;
        }
      });
      return {[key]: unicElem, value: count};
    });
  };


  multipleChartsData(date, users, key) {
    let data = {'date': date};
    users.forEach(user => {
      data[user.name] = user.index;
    });
    this.chartsGraphsData(users, key);
    return data;
  };

  chartsGraphsData(users, key) {
    let data = [];
    users.forEach(eachUser => {
      let obj = {
        'balloonText': '[[title]]: [[value]]',
        'bullet': 'round',
        'title': '',
        'valueField': '',
        'fillAlphas': 0
      };
      obj.title = eachUser.name;
      obj.valueField = eachUser.name;
      data.push(obj);
    });
    this.globalChartsData.chartsData[key].graphs = data;
  };

  compileUserData(response) {
    return this.searchUnicData('multyCompareStat', response, 'name').map(user => {
      return ({'name': user, 'index': 0});
    });
  };

  searchApropriateUsers(response) {
    return this.compileUserData(response).filter(unicUser => {
      let bool = false;
      this.readResponseData(response).multyCompareStat.forEach(user => {
        if(user.name === unicUser.name) {
          unicUser.index += 1;
          if(unicUser.index > 10) {
            bool = true;
          }
        }
      });
      if(bool) {
        unicUser.index = 0;
        return unicUser;
      }
    });
  };

  multySortData(response) {
    return this.searchUnicData('multyCompareStat',  response, 'date').sort((a, b) => {
      return new Date(a) - new Date(b);
    });
  };

  multipleUserCompare(response) {
    let result = [];
    this.multySortData(response).forEach(unicDate => {
      let users = this.searchApropriateUsers(response);
      this.readResponseData(response).multyCompareStat.forEach(allFireData => {
        if(unicDate === allFireData.date) {
          users.forEach(unicUser => {
            if(allFireData.name === unicUser.name) {
              unicUser.index += 1;
            }
          });
        }
      });
      result.push(this.multipleChartsData(unicDate, users, 'multipleUserCompare'));
    });
    return result;
  };

  userEmailDateCompare(response) {
    let result = [];
    let users = this.searchApropriateUsers(response);
    this.multySortData(response).forEach(unicDate => {
      this.readResponseData(response).multyCompareStat.forEach(allFireData => {
        if(unicDate === allFireData.date) {
          users.forEach((unicUser) => {
            if(allFireData.name === unicUser.name) {
              unicUser.index += 1;
            }
          });
        }
      });
      result.push(this.multipleChartsData(unicDate, users, 'userEmailDateCompare'));
    });
    return result;
  };
};

export default ChartsFirebaseDataService;
