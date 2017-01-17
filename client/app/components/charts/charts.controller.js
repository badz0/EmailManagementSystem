class ChartsController {
  constructor(Firedbservice, GlobalHardcodeConfigService, FiredbAutorisation, ChartsFirebaseDataService) {'ngInject';
    this.configData = GlobalHardcodeConfigService.configData();
  };
};

export default ChartsController;
