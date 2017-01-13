import * as firebase from 'firebase';

class EmailDetailService {
    constructor(Firedbservice, $firebaseArray, $log) {
        'ngInject';
        const ref = firebase.database().ref().child('user/0').child('listOfEmails');
        this.list = $firebaseArray(ref);
    }
    getList() {
        return this.list.$loaded(
            (list) => {
                return list;
            },
            (error) => {
                $log.error('Error:', error);
            });
    }
}
export default EmailDetailService;
