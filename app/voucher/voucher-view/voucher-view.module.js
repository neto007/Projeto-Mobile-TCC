import voucherViewComponent from './voucher-view.component';

const voucherViewModule = angular.module('mobile.app.voucher.voucher-view', []);

voucherViewModule.component('voucherView', voucherViewComponent);

//configure component states
voucherViewModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('voucher-view', {
      url: '/voucher-view',
      template: '<voucher-view></voucher-view>'
    });
});

export default voucherViewModule.name;
