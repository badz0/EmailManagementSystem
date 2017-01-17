class ChartsController {
  constructor(Firedbservice, GlobalHardcodeConfigService, ChartsFirebaseDataService) {'ngInject';
    this.configData = GlobalHardcodeConfigService.configData();
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
