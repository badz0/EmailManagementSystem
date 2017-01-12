import template from './addEmail.html';
import controller from './addEmail.controller';
import './addEmail.scss';

let addEmailComponent = {
  template,
  controller,
  bindings: {
    returnData: '&'
  }
};

export default addEmailComponent;
