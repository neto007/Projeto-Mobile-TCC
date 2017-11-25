import shellComponent from './shell.component';
import Cidades from './cidades/cidades.module';

const shellModule = angular.module('mobile.app.common.shell', [
  Cidades
]);

shellModule.component('shell', shellComponent);

export default shellModule.name;
