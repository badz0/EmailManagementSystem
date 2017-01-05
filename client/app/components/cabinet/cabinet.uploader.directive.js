import * as firebase from 'firebase';

export const CabinetUploader=()=>{
  return {
    restrict:'A',
    link(scope,element,attrs){  
      element.on('change', function (e) {
        firebase.storage().ref().child(`user9/${e.target.files[0].name}`).put(e.target.files[0]);
      });
    }
  };
};

