import voucherComponent from './voucher.component';

const VoucherModule = angular.module('mobile.app.voucher.voucher', []);

VoucherModule.component('voucher', voucherComponent);

//configure component states
VoucherModule.config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('voucher', {
            url: '/voucher/:id',
            template: '<voucher></voucher>'
        });
});

export default VoucherModule.name;