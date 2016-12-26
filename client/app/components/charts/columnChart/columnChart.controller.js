import configs from './columnChart.configData.js';
class ColumnChartController {
  constructor() {
    this.$onInit = function () {
      this.name = 'All received emails sorted by amound and day income';
      AmCharts.makeChart('columnchart', configs);
    }
  }
}

export default ColumnChartController;
