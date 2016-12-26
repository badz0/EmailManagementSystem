import configs from './pieChart.configData.js';
class PieChartController {
  constructor() {
    this.$onInit = function () {
      this.name = 'Received emails sorted by category';
      AmCharts.makeChart('piechart', configs);
    };
  }
}

export default PieChartController;
