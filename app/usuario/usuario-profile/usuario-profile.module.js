import usuarioProfileComponent from './usuario-profile.component';

const module = angular.module('mobile.app.usuario.usuario-profile', []);

module.component('usuarioProfile', usuarioProfileComponent);

//configure component states
module.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('usuario-profile', {
      url: '/usuario-profile',
      template: '<usuario-profile></usuario-profile>'
    });
});

export default module.name;
