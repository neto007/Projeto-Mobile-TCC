import eventoComponent from './evento.component';

const eventoModule = angular.module('mobile.app.evento.evento', []);

eventoModule.component('evento', eventoComponent);

//configure component states
eventoModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('evento', {
      url: '/evento/:id',
      template: '<evento></evento>'
    });
});

export default eventoModule.name;
