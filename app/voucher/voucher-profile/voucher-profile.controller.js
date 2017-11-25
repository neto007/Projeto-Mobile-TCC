import styles from './voucher-profile.scss';

export default class {

    constructor(VoucherService, $stateParams, $state) {
        'ngInject';

        this.voucherService = VoucherService;
        this.vouchers = [];
        this.params = $stateParams;
        this.state = $state;
    }

    $onInit() {
        switch(this.params.tipo) {
            case "estabelecimento":
                this.fetchVoucherEstabelecimento();
                break;
            case "evento":
                this.fetchVoucherEvento();
                break;
            default:
                this.fetchVoucherUser();
                break;
        }


    }

    adquirirVoucher(voucherId) {
        this.voucherService.adquirirVoucher(voucherId)
            .then(() => {
                this.state.go('voucher-view', {}, {reload: true});
            })
            .catch((error) => {
                console.error(error);
                alert("Ocorreu um erro ao tentar obter esse voucher!");
            })
    } 

    fetchVoucherUser() {
        this.voucherService.findAll()
            .then(vouchers => this.vouchers = vouchers);    
    }

    fetchVoucherEstabelecimento() {
        this.voucherService.findByEstabelecimento(this.params.id)
            .then(vouchers => this.vouchers = vouchers);    
    }

    fetchVoucherEvento() {
        this.voucherService.findByEvento(this.params.id)
            .then(vouchers => this.vouchers = vouchers);    
    }

    $onChanges() {

    }

    $onDestroy() {

    }
}