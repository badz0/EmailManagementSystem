class ChartsController {
  constructor(GlobalHardcodeConfigService) {'ngInject';
    this.configData = GlobalHardcodeConfigService.configData();
  };
};

export default ChartsController;
