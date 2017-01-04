import configs from './lineChart.configData.js';
class LineChartController {
  $onInit () {
    this.name = 'Emails amout sorted by group';
    AmCharts.makeChart('linechart', configs);
  }
}

export default LineChartController;

