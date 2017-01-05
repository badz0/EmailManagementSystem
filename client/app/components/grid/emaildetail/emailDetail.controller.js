class EmailController {
    constructor(EmailDetailService, $stateParams) {
        "ngInject";
        this.param = $stateParams;
        this.idParam = parseInt(this.param.id);
        this.data = EmailDetailService;
    }
    $onInit() {
        this.name = 'Hello dynamic routes';
        this.data.then((res) => {
        	this.currentData = res.find((value) => {
            	return value.id === this.idParam;
            });
        }).catch((e) => {
        	console.log(e);
        });
    }
}

export default EmailController;
