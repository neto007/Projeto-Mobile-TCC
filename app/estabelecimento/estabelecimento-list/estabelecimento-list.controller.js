import styles from './estabelecimento-list.scss';

export default class {

    constructor($ionicSideMenuDelegate, $ionicModal, EstabelecimentoService) {
        'ngInject';

        this.ionicSideMenuDelegate = $ionicSideMenuDelegate;
        this.ionicModal = $ionicModal;
        this.ionicModal.fromTemplateUrl('modalFilter.html', {
            animation: 'slide-in-up'
        });

        this.ionicSideMenuDelegate = $ionicSideMenuDelegate;
        this.estabelecimentoService = EstabelecimentoService;
        this.estabelecimentos = [];
    }

    slideMenu() {
        this.ionicSideMenuDelegate.toggleLeft();
    }

    openModal() {
        this.ionicModal.show();
        console.log("NUM PASSA AQUI")
    }

    $onInit() {
        this.estabelecimentoService.findAll()
            .then((estabelecimentos) => this.estabelecimentos = estabelecimentos);
    }

}