import configs from './lineChart.configData.js';
class LineChartController {
  constructor() {
    this.$onInit = function () {
      this.name = 'Emails amout sorted by group';
      AmCharts.makeChart('linechart', configs);
    }
  }
}

export default LineChartController;

