function dialogDataService(chartsFirebaseDataFactory, globalHardcodeConfigFactory) {'ngInject';
  const dialog = {
    dialogGroupCharts : dialogGroupCharts,
    dialogDateCharts  : dialogDateCharts,
    userListBuild     : userListBuild
  };
  return dialog;

  function dialogGroupCharts(index) {
    chartsFirebaseDataFactory.firebChartData().then((res) => {
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
    chartsFirebaseDataFactory.firebChartData().then((res) => {
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
  function userListBuild() {
    chartsFirebaseDataFactory.firebChartData().then((res) => {
      return res.user;
    });
  };
};

export default dialogDataService;
