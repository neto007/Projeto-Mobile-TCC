import InteresseService from './interesse/interesse.service';
import SettingsService from './settings/settings.service';
import Shell from './shell/shell.module';
import EstabelecimentoService from './estabelecimento/estabelecimento.service';
import EventoService from './evento/evento.service';
import CategoriasService from './categorias/categorias.service';
import VoucherService from './voucher/voucher.service';
import LoginService from './login/login.service';
import CidadesService from './cidades/cidades.service';

const module = angular.module('mobile.app.common', [
  Shell
]);

module.service('InteresseService', InteresseService);
module.service('SettingsService', SettingsService);
module.service('EstabelecimentoService', EstabelecimentoService);
module.service('EventoService', EventoService);
module.service('CategoriasService', CategoriasService);
module.service('VoucherService', VoucherService);
module.service('LoginService', LoginService);
module.service('CidadesService', CidadesService);

export default module.name;
