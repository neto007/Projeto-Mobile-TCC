import styles from './estabelecimento-evento.module.scss';

export default class {

    constructor($ionicModal, $ionicSideMenuDelegate, EstabelecimentoService, EventoService, $stateParams) {
        'ngInject';

        this.estabelecimentoService = EstabelecimentoService;
        this.eventoService = EventoService;
        this.params = $stateParams;


        this.eventos = [];
        this.styles = styles;
    }

    $onInit() {
        this.eventoService.findAll()
            .then((eventos) => this.eventos = eventos);
    }

    $onChanges() {}

    $onDestroy() {}
}