import * as firebase from 'firebase';

export default function(){
  return {
    restrict:'A',
    link: (scope,element,attrs) => {  
      element.on('change', function (e) {
        let uploadTask=firebase.storage().ref().child(`user9/${e.target.files[0].name}`).put(e.target.files[0]);
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,function(snapshot) {
          let downloadURL = uploadTask.snapshot.downloadURL;
          const user={avatar:downloadURL};
          firebase.database().ref().child('user/9').update(user);
        });
      });
    }
  };
}
