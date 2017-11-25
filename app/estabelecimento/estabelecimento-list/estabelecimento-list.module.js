import estabelecimentoListComponent from './estabelecimento-list.component';

const estabelecimentoListModule = angular.module('mobile.app.estabelecimento.estabelecimento-list', []);

estabelecimentoListModule.component('estabelecimentoList', estabelecimentoListComponent);

//configure component states
estabelecimentoListModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('estabelecimento-list', {
      url: '/estabelecimento-list',
      template: '<estabelecimento-list></estabelecimento-list>'
    });
});

export default estabelecimentoListModule.name;
