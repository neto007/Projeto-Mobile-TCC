import styles from './evento.scss';

export default class {

  constructor($ionicSideMenuDelegate, EventoService, $stateParams) {
    'ngInject';

    this.ionicSideMenuDelegate = $ionicSideMenuDelegate;
    this.eventoService = EventoService;
    this.evento = {};
    this.pessoasConfirmadas = 0;
    this.params = $stateParams;
    // css-modules (https://github.com/webpack/css-loader#css-modules)
  }

  slideMenu() {
    this.ionicSideMenuDelegate.toggleLeft();
  }

  confirmarPresenca(){
    if (confirm("Deseja realmente confirmar presença?")) {
      this.eventoService.confirmarPresenca(this.params.id)
        .then(evento => this.evento = evento);
        window.location.reload();
    }
  }

  findVouchers(){
    this.eventoService.findVouchers(this.params.id)
      .then(evento => this.evento = evento);
  }

  $onInit() {
    this.eventoService.findById(this.params.id)
      .then(evento => this.evento = evento);

    this.eventoService.findPessoasConfirmadas(this.params.id)
      .then(pessoasConfirmadas => this.pessoasConfirmadas = pessoasConfirmadas);
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
