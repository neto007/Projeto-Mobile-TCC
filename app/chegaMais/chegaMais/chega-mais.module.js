import chegaMaisComponent from './chega-mais.component';

const chegaMaisModule = angular.module('mobile.app.chegaMais.chegaMais', []);

chegaMaisModule.component('chegaMais', chegaMaisComponent);

//configure component states
chegaMaisModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('chega-mais', {
      url: '/chega-ai',
      template: '<chega-mais></chega-mais>'
    });
});

export default chegaMaisModule.name;
