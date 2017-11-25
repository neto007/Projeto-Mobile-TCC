console.log('application loading...');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import animate from 'angular-animate';
import 'ionic-angular/release/js/ionic.bundle';
import AppStyles from '../styles/app.scss';
import AppComponent from './app.component';
import Login from './login/login.module';
import Interesse from './interesse/interesse.module';
import Home from './home/home.module';
import Estabelecimento from './estabelecimento/estabelecimento.module';
import Common from './common/common.module';
import Evento from './evento/evento.module';
import Voucher from './voucher/voucher.module';
import ChegaMais from './chegaMais/chega-mais.module';
import ngMap from 'ngmap';
import 'angular-slugify';
import 'angular-jwt';
import Usuario from './usuario/usuario.module';

import 'angular-block-ui/dist/angular-block-ui.css';
import 'angular-block-ui/dist/angular-block-ui.js';

// create our app module and setup core dependencies
angular.module('app', [

  uiRouter,
  animate,
  'ionic',
  'slugifier',
  'angular-jwt',
  'blockUI',
  ngMap,
  Login,
  Interesse,
  Home,
  Estabelecimento,
  Common,
  Evento,
  Voucher,
  ChegaMais,
  Usuario
])

.factory('HttpRequestInterceptor', function($q, $location) {
  return {
      'responseError': function(rejection) {
          if(rejection.status === 401){
              localStorage.removeItem('login_token');
              localStorage.removeItem('login_subject');
              //$state.go('login');                   
              window.location = '/login';
              return;
          }

          if(rejection.status === 403) {
              alert("Operação negada!");
              window.location = '/login';
              return;    
          }

          return $q.reject(rejection);
       },
       request: function (config) {
          
          if(localStorage.getItem('login_token') != null) {
             config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('login_token');
          }    

          config.headers['Content-Type'] = 'application/json;charset=UTF-8';

          return config;
      }
   }
})

.config(($urlRouterProvider, $ionicConfigProvider, $httpProvider, blockUIConfig) => {
  'ngInject';

  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};

  $httpProvider.interceptors.push('HttpRequestInterceptor');

  $ionicConfigProvider.tabs.position('bottom'); 

  // setup default route
  $urlRouterProvider.otherwise('/login');

  blockUIConfig.message = "Carregando...";
  
})

.run(($ionicPlatform) => {
  'ngInject';

  $ionicPlatform.ready(() => {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      window.cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) { // org.apache.cordova.statusbar required
      window.StatusBar.styleDefault();
    }
  });
})

/* istanbul ignore next */
.run(($rootScope, $state, LoginService) => {
    // inject shell
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
        if(!LoginService.isLogged() && toState.name != 'login') {
            event.preventDefault();
            $state.go('login', { redirectTo: toState.name }, { location: 'replace' });
            return;
        }

        if(LoginService.isLogged() && toState.name == 'login') {
            event.preventDefault();
            $state.go('home', toParams, { location: 'replace' });
            return;
        }
      
        if(toState.hasOwnProperty('redirectTo')) {
            event.preventDefault();
            $state.go(toState.redirectTo, toParams, {location: 'replace'})
            return;
        }

        if((!toState.hasOwnProperty('noShell') || toState.noShell === false) && !(/\<shell\>/g).test(toState.template)) {
            toState.template = `<shell>${toState.template}</shell>`;
        }
    });
})

// setup root component
.component('app', AppComponent);
