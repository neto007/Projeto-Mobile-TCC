import voucherProfileComponent from './voucher-profile.component';

const voucherModule = angular.module('mobile.app.voucher.voucher-profile', []);

voucherModule.component('voucherProfile', voucherProfileComponent);

//configure component states
voucherModule.config(($stateProvider) => {
    'ngInject';

    $stateProvider
        .state('voucher-profile', {
            url: '/voucher-profile/:id/:tipo',
            template: '<voucher-profile></voucher-profile>'
        });
});

export default voucherModule.name;