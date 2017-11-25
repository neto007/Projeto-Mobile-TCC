import estabelecimentoComponent from './estabelecimento.component';
import EstabelecimentoInfo from './estabelecimento-info/estabelecimento-info.module';
import EstabelecimentoGaleria from './estabelecimento-galeria/estabelecimento-galeria.module';
import EstabelecimentoEvento from './estabelecimento-evento/estabelecimento-evento.module';

const estabelecimentoModule = angular.module('mobile.app.estabelecimento.estabelecimento', [
  EstabelecimentoInfo,
  EstabelecimentoGaleria,
  EstabelecimentoEvento
]);

estabelecimentoModule.component('estabelecimento', estabelecimentoComponent);

//configure component states
estabelecimentoModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('estabelecimento', {
      url: '/estabelecimento/:id',
      template: '<estabelecimento></estabelecimento>'
    });
});

export default estabelecimentoModule.name;
