import Estabelecimento from './estabelecimento/estabelecimento.module'
import EstabelecimentoList from './estabelecimento-list/estabelecimento-list.module';


const module = angular.module('mobile.app.estabelecimento', [
  Estabelecimento,
  EstabelecimentoList
]);

export default module.name;
