class SwitcherController {
  constructor(FiredbAutorisation) {
    'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.FiredbAutorisation.responseData().then(res => {
      this.userData = res.userData;
    });
  }
  setState(state){
    this.onStateChange({state: state});
  }
  }

export default SwitcherController;  
  