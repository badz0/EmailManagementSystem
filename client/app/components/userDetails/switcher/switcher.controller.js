class SwitcherController {
   
  setState(state){
    this.state = state;
    this.onStateChange({$event: {state: state}});
  };

  }

export default SwitcherController;  
  