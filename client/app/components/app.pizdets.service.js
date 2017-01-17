import * as firebase from 'firebase';

class PIZDEZ {
  constructor($firebaseObject,Firedbservice, FiredbAutorisation) {'ngInject';
    this.FiredbAutorisation = FiredbAutorisation;
    this.methoddd();
  }

  methoddd() {
    return this.FiredbAutorisation.fidnIndex().then((res) => {
      console.log(res);
    });
  }
}
export default PIZDEZ;
