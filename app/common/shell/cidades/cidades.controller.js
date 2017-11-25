import styles from './cidades.scss';

export default class {

    constructor($ionicSideMenuDelegate, CidadesService, $stateParams, $state) {
        'ngInject';

        this.ionicSideMenuDelegate = $ionicSideMenuDelegate;
        this.cidadesService = CidadesService;
        this.params = $stateParams;
        this.$state = $state;
        this.cidades = [{ "cidade": "Maringá" }, { "cidade": "Curitiba" }, { "cidade": "Londrina" }, { "cidade": "Arapongas" }, { "cidade": "Marialva" }];

        // css-modules (https://github.com/webpack/css-loader#css-modules)
        this.styles = styles;
    }

    selecao(cidade) {

        console.log(cidade)
        this.cidadesService.selecionarCidade(cidade)
            .then(() => {
                this.$state.go('home');
                window.location.reload();
            });


    }

    slideMenu() {
        this.ionicSideMenuDelegate.toggleLeft();
    }

    $onInit(cidades) {



    }

    $onChanges() {}

    $onDestroy() {}
}