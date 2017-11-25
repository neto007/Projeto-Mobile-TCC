import interesseComponent from './interesse.component';

const intereseModule = angular.module('mobile.app.interesse.interesse', []);

intereseModule.component('interesse', interesseComponent);

//configure component states
intereseModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('interesse', {
      url: '/interesse',
      template: '<interesse></interesse>',
      noShell: true
    });
});

export default intereseModule.name;
