import * as firebase from "firebase";

export class EmailDetailService {
    constructor($firebaseArray) {
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
}
