import configs from './multipleChart.configData.js';
class ColumnChartController {
  $onInit () {
    AmCharts.makeChart('multiplechart', configs);
  }
}

export default ColumnChartController;
