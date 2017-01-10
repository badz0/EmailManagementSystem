import * as firebase from "firebase";

export class EmailDetailService {
    constructor(Firedbservice, $firebaseArray, $log) {
        'ngInject';
        const ref = firebase.database().ref().child('user');
        this.list = $firebaseArray(ref);
    }
    getList() {
        return this.list.$loaded(
            (list) => {
                return list;
            },
            (error) => {
                console.error("Error:", error);
            });
    }
}
export default EmailDetailService;
