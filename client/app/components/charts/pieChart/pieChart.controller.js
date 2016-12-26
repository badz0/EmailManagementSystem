import configs from './pieChart.configData.js';
class PieChartController {
  constructor() {
    this.name = 'Emails amout sorted by category';
    const chart = AmCharts.makeChart('piechart', configs);
  }
}

export default PieChartController;
