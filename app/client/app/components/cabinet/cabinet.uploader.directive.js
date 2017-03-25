import * as firebase from 'firebase';

class cabinetUploader{
  constructor(){
    this.restrict='A';
    this.controller = class cabinetUploaderDirectiveController {
      constructor (FiredbAutorisation) {'ngInject';
        this.FiredbAutorisation = FiredbAutorisation;
        this.FiredbAutorisation.responseData().then(res => {
          this.res=res.userData.index;
        });
      }
    };
    this.controllerAs = 'ctrl';
    this.bindToController = true;
  }
  link(scope,elem,attrs,ctrl){
    elem.on('change', function() {
      let userId=ctrl.res;
      if(this.files[0].size<1000000){
        let uploadTask=firebase.storage().ref().child(`user${userId}/${this.files[0].name}`).put(this.files[0]);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,function(snapshot) {
          let downloadURL = uploadTask.snapshot.downloadURL;
          const user={avatar:downloadURL};
          firebase.database().ref().child(`user/${userId}`).update(user);
        });
      }
    });
  }
}

export default cabinetUploader;