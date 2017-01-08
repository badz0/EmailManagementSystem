import * as firebase from 'firebase';

export const CabinetUploader=()=>{
  return {
    restrict:'A',
    link: (scope,element,attrs) => {  
      element.on('change', function (e) {
        console.log('clicked from directive');
        let uploadTask=firebase.storage().ref().child(`user9/${e.target.files[0].name}`).put(e.target.files[0]);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,function(snapshot) {
          let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log('Upload is running');
              break;
          }
        }, function(error) {
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
      }, function() {
        let downloadURL = uploadTask.snapshot.downloadURL;
        this.user={};
        this.user.avatar=downloadURL;
        firebase.database().ref().child('user/9').update(this.user);
      });
      });
    }
  };
};

