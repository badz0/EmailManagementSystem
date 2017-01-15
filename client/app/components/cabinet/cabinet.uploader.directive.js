import * as firebase from 'firebase';

class cabinetUploader{
  constructor(){
    this.restrict='A';
  }
  link(scope,elem,attrs){
    elem.on('change', function() {
      if(this.files[0].size<60000){
        let uploadTask=firebase.storage().ref().child(`user9/${this.files[0].name}`).put(this.files[0]);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,function(snapshot) {
          let downloadURL = uploadTask.snapshot.downloadURL;
          const user={avatar:downloadURL};
          firebase.database().ref().child('user/9').update(user);
        });
      }
      else{
        alert('nonono');
      }
    });
  }
}

export default cabinetUploader;