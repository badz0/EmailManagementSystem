function dialogDataService(chartsFirebaseDataFactory, globalHardcodeConfigFactory) {'ngInject';
  return {
    dialogGroupCharts : dialogGroupCharts,
    dialogDateCharts  : dialogDateCharts,
    dialogActivityCharts: dialogActivityCharts,
    userListBuild     : userListBuild
  };

  function dialogGroupCharts(index) {
    chartsFirebaseDataFactory.firedbChartData().then((res) => {
      let pie = [];
      res.user.forEach((val) => {
        pie.push({'letters': val.listOfEmails});
      });
      let arr = [];
      pie[index].letters.map((val, i) => {
        if (arr.indexOf(val.group) == -1) {
          arr.push(val.group);
        }
      });
      let array = arr.map((val, i) => {
        let a = 0;
        let total = pie[index].letters.reduce((count, vallue, i) => {
          if(val == vallue.group) {
            a += 1;
          }
        });
        return {group: val, value: a};
      });
      let dialogGroup = globalHardcodeConfigFactory.anotherChart;
      dialogGroup.dataProvider = array;
      AmCharts.makeChart(`chartsData${index}`, dialogGroup);
    });
  };
  function dialogDateCharts(index) {
    chartsFirebaseDataFactory.firedbChartData().then((res) => {
      let pie = [];
      res.user.forEach((val) => {
        pie.push({'letters': val.listOfEmails});
      });
      let arr = [];
      pie[index].letters.map((val, i) => {
        if (arr.indexOf(val.date) == -1) {
          arr.push(val.date);
        }
      });
      let array = arr.map((val, i) => {
        let a = 0;
        let total = pie[index].letters.reduce((count, vallue, i) => {
          if(val == vallue.date) {
            a += 1;
          }
        });
        return {date: val, value: a};
      });
      let dialogDate = globalHardcodeConfigFactory.someChart;
      dialogDate.dataProvider = array;

      AmCharts.makeChart(`charts${index}`, dialogDate);
    });
  };
  function dialogActivityCharts(index) {
     return chartsFirebaseDataFactory.firedbChartData().then((res) => {
       console.log("RESPONSE", res);
       // let arr = res.user.map((val) => {
       //    return { Login: val.login,  Activity: val.logInCount};
       //  });
       //  let array = arr.sort((a, b) => {
       //  return b.Activity - a.Activity;
       // });
    let pie = [];
      res.user.forEach((val) => {
        pie.push({'letters': val.listOfEmails});
      });
      let arr = [];
      pie[index].letters.map((val, i) => {
        if (arr.indexOf(val.recipient) == -1) {
          arr.push(val.recipient);
        }
      });
      let array = arr.map((val, i) => {
        let a = 0;
        let total = pie[index].letters.reduce((count, vallue, i) => {
          if(val == vallue.recipient) {
            a += 1;
          }
        });
        return {recipient: val, value: a};
      });
       console.log("RESPONSE", array);

       let arrays = array.filter((val) => {
        if(val.value > 1) {
         return ({recipient: val.recipient, value: val.value})
        }
       })
       //  let arrays = array.sort((a, b) => {
       //  return b.value - a.value;
       // });
        let chartsActive = globalHardcodeConfigFactory.chartsActive2;
        chartsActive.dataProvider = arrays;
       //AmCharts.makeChart( `chartsActive`, chartsActive);
       AmCharts.makeChart(`chartsActive${index}`, chartsActive);
      });
  };
  function userListBuild() {
    chartsFirebaseDataFactory.firedbChartData().then((res) => {
      return res.user;
    });
  };
};

export default dialogDataService;
