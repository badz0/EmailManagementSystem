class ChartsController {
  constructor(HardcodeConfigService, ChartsFirebaseDataService) {'ngInject';
    this.configData = HardcodeConfigService.configData();
  };

  $onInit() {
  	this.viewState = {
  		charts: true,
  		table: false,
  	};
  }

  onStateChange(state) {
  	this.viewState = {
  		charts: state === 'chart',
  		table: state  === 'table',
  	};
  }
};

export default ChartsController;
