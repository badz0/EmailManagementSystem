function globalHardcodeConfigFactory() {
  const config = {
    buttons: {
      next: "Next",
      prev: "Prev"
    }
  };
  return {
    configs() {
      return config;
    }
  }
}

export default globalHardcodeConfigFactory;
