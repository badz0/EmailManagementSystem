import configs from './pieChart.configData.js';
import configsFile from '../../../app.configsFile.js';

class PieChartController {
  $onInit () {
    this.name = configsFile.chartsTitle;
    AmCharts.makeChart('piechart', configs);

    //alert(configsFile.chartsTitle);
  }

}

export default PieChartController;
