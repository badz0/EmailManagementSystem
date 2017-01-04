class EmailController {
    constructor(EmailDetailService, $stateParams) {
        "ngInject";
        this.param = $stateParams;
        let idParam = parseInt(this.param.id);
        this.data = EmailDetailService;
        let data = this.data;
        function matchById(value) {
            return value.id === idParam;
        }
        data.then((res) => {
            this.currentData = res.find(matchById);
        });
    }
}

export default EmailController;
