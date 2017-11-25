import cidadesComponent from './cidades.component';

const module = angular.module('mobile.app.common.shell.cidades', []);

module.component('cidades', cidadesComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('cidades', {
      url: '/cidades',
      template: '<cidades></cidades>'
    });
});

export default module.name;
