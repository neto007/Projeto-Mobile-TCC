import VoucherView from './voucher-view/voucher-view.module';
import VoucherProfile from './voucher-profile/voucher-profile.module';
import Voucher from './voucher/voucher.module';

const voucherModule = angular.module('mobile.app.voucher', [
    VoucherView,
    VoucherProfile,
    Voucher
]);

export default voucherModule.name;