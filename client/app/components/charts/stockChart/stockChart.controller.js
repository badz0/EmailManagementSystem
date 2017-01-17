import configs from './stockChart.configData.js';
class StockChartController {
  $onInit () {
    var chart = AmCharts.makeChart( 'dataset', configs);
  }
}

export default StockChartController;

