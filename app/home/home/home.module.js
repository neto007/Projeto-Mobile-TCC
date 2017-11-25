import homeComponent from './home.component';

const homeModule = angular.module('mobile.app.home.home', []);

homeModule.component('home', homeComponent);

//configure component states
homeModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/home',
      template: '<home></home>'
    });
});

export default homeModule.name;
