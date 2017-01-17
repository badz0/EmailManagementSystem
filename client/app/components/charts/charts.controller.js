class ChartsController {
  constructor(Firedbservice, GlobalHardcodeConfigService, ChartsFirebaseDataService) {'ngInject';
    this.configData = GlobalHardcodeConfigService.configData();
  };
};

export default ChartsController;
