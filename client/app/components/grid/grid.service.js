import * as firebase from "firebase";

function EmailDetailService(Firedbservice, $firebaseArray) {
        'ngInject';
        const ref = firebase.database().ref().child('email');
        var list = $firebaseArray(ref);
        return list.$loaded(
            function(list) {
                return list;
            },
            function(error) {
                console.error("Error:", error);
            });
    }

export default EmailDetailService;

