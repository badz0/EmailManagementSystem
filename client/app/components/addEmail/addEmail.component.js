import template from './addEmail.html';
import controller from './addEmail.controller';

let addEmailComponent = {
  template,
  controller,
  bindings: {
    returnData: '&'
  }
};

export default addEmailComponent;
