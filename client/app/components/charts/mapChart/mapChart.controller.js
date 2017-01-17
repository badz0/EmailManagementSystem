import configs from './mapChart.configData.js';
class MapChartController {
  $onInit () {
    AmCharts.makeChart( 'mapchart', configs);
  }
}

export default MapChartController;
