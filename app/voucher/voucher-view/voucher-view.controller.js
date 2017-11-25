import styles from './voucher-view.scss';

export default class {

  constructor(VoucherService) {
    'ngInject';

    this.voucherService = VoucherService;
    this.vouchers = [];
  }

  $onInit() {
    this.voucherService.findAll()
      //.then(vouchers => vouchers.filter(voucher => voucher.status == 1))
      .then(vouchers => this.vouchers = vouchers);
  }

  $onChanges() {
    this.vouchers = [];
    this.voucherService.findAll()
      //.then(vouchers => vouchers.filter(voucher => voucher.status == 1))
      .then(vouchers => this.vouchers = vouchers);
  }

  $onDestroy() {
  }
}
