import loginComponent from './login.component';

const loginModule = angular.module('mobile.app.login.login', []);

loginModule.component('login', loginComponent);

//configure component states
loginModule.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('login', {
      url: '/login',
      template: '<login></login>',
      noShell: true
    });
});

export default loginModule.name;
