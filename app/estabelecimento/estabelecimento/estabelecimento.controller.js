import styles from './estabelecimento.scss';

export default class {

    constructor($ionicSideMenuDelegate, $ionicModal, EstabelecimentoService, $stateParams) {
        'ngInject';

        // css-modules (https://github.com/webpack/css-loader#css-modules)
        this.ionicSideMenuDelegate = $ionicSideMenuDelegate;
        this.estabelecimentoService = EstabelecimentoService;
        this.estabelecimento = {};
        this.params = $stateParams;
    }

    slideMenu() {
        this.ionicSideMenuDelegate.toggleLeft();
    }

    $onInit() {
        this.estabelecimentoService.findById(this.params.id)
            .then((estabelecimento) => this.estabelecimento = estabelecimento);
    }

    $onChanges() {}

    $onDestroy() {}
}