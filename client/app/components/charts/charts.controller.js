class ChartsController {
  constructor($log, chartsFirebaseDataFactory, dragularService, $element, $mdDialog, chartService, globalHardcodeConfigFactory) {'ngInject';
    dragularService('.containerVertical', { removeOnSpill: true });

    chartService.pieChart();
    chartService.columnChart();
    chartService.multipleChart();
    chartService.lineChart();

    this.dialog = $mdDialog;

    chartsFirebaseDataFactory.firebChartData().then((res) => {
      this.usersList = res.user;
    });
    chartsFirebaseDataFactory.firebChartData().then((res) => {
      this.pie = [];
      res.user.forEach((val) => {
          this.pie.push({'letters': val.listOfEmails});
      });
    });

   this.linedatacharts = function(index) {
      let arr = [];
      this.pie[index].letters.map((val, i) => {
        if (arr.indexOf(val.group) == -1) {
          arr.push(val.group)
        }
      });
      let array = arr.map((val, i) => {
        let a = 0;
        let total = this.pie[index].letters.reduce((count, vallue, i) => {
          if(val == vallue.group) {
            a += 1;
          }
        });
        return {group: val, value: a}
      })
      return array;
    };
    this.datedatacharts = function(index) {
      let arr = [];
      this.pie[index].letters.map((val, i) => {
        if (arr.indexOf(val.date) == -1) {
          arr.push(val.date)
        }
      });
      let array = arr.map((val, i) => {
        let a = 0;
        let total = this.pie[index].letters.reduce((count, vallue, i) => {
          if(val == vallue.date) {
            a += 1;
          }
        });
        return {date: val, value: a}
      })
      return array;
   };
  this.configData = globalHardcodeConfigFactory;
  };
  previousItem() {
    this.configData.currentNavItem === 0 ? this.configData.currentNavItem = this.configData.tags.length : this.configData.currentNavItem -= 1;
  };
  nextItem() {
    this.configData.currentNavItem >= this.configData.tags.length - 1 ? this.configData.currentNavItem = 0 : this.configData.currentNavItem += 1;
  };

  showCharts(index) {
    let bla = this.configData.someChart;
    bla.dataProvider = this.datedatacharts(index);
    AmCharts.makeChart(`charts${index}`, bla);

    let blabla = this.configData.anotherChart;
    blabla.dataProvider = this.linedatacharts(index);
    AmCharts.makeChart(`chartsData${index}`, blabla);

    this.dialog.show({
      contentElement: `#chart${index}`,
      clickOutsideToClose: true
    });
  };
  showUserEmails(user) {
    this.user =  this.usersList[user].login;
    this.listOfEmails = this.usersList[user].listOfEmails;
      this.dialog.show({
        contentElement: `#usersList`,
        clickOutsideToClose: true
      });
  };
}

export default ChartsController;
