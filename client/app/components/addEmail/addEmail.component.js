import template from './addEmail.html';
import controller from './addEmail.controller';

let addEmailComponent = {
    bindings: {
    returnData: '&'
  },
  template,
  controller
};

export default addEmailComponent;
