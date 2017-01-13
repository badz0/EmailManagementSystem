class EmailController {
    constructor(EmailDetailService, $stateParams) {
        'ngInject';
        this.idParam = parseInt($stateParams.id);
        this.EmailDetailService = EmailDetailService.getList();
    }
    $onInit() {
        this.name = 'Hello dynamic routes';
        this.EmailDetailService.then((res) => {
        	this.currentData = res.find((value) => {
            	return value.id === this.idParam;
            });
        }, (e) => {
            console.error(e);
        });
    }
}

export default EmailController;