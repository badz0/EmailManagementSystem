class ChartTwoController {
  constructor() {
    const vm = this;
    vm.name = 'Emails amout sorted by group';
    vm.chart = AmCharts.makeChart( "chartdivtwo", {
      "type": "pie",
      "theme": "light",
      "dataProvider": [ {
        "Group": "Group 1",
        "letters": 500
      }, {
        "Group": "Group 2",
        "letters": 312
      }, {
        "Group": "Group 3",
        "letters": 201
      }, {
        "Group": "Group 4",
        "letters": 165
      }, {
        "Group": "Group 5",
        "letters": 139
      }, {
        "Group": "Group 6",
        "letters": 128
      }, {
        "Group": "Group 7",
        "letters": 99
      }, {
        "Group": "Group 8",
        "letters": 600
      } ],
      "valueField": "letters",
      "titleField": "Group",
       "balloon":{
       "fixedPosition":true
      }
    });
  }
}

export default ChartTwoController;
