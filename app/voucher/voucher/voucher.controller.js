import styles from './voucher.scss';

export default class {

    constructor(VoucherService, $stateParams, $state) {
        'ngInject';

        // css-modules (https://github.com/webpack/css-loader#css-modules)
        this.styles = styles;
        this.params = $stateParams;
        this.state = $state;
        this.voucherService = VoucherService;
        this.voucher = {};
    }

    confirmarVoucher(voucherId) {
        this.voucherService.confirmarVoucher(voucherId)
            .then(() => {
                alert('Voucher utilizado com sucesso!');
                this.state.go("home", {}, {reload: true});
            });
    }

    $onInit() {
        this.voucherService.findById(this.params.id)
            .then(voucher => this.voucher = voucher);
    }

    $onChanges() {}

    $onDestroy() {}
}