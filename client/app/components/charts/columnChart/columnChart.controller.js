import configs from './columnChart.configData.js';
class ColumnChartController {
  constructor($http) {'ngInject';
    this.name = 'All received emails sorted by amound and day income';
   	const chart = AmCharts.makeChart('columnchart', configs);
  }
}

export default ColumnChartController;
