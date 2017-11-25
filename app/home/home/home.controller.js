import styles from './home.scss';

export default class {

    constructor($ionicModal, $ionicSideMenuDelegate, EventoService, CategoriasService) {
        'ngInject';


        this.ionicModal = $ionicModal;
        this.ionicModal.fromTemplateUrl('modalFilter.html', {
            this: this,
            animation: 'slide-in-up'
        }).then(function(modal) {

            this.modal = modal;

        });

        this.ionicSideMenuDelegate = $ionicSideMenuDelegate;
        this.eventoService = EventoService;
        this.categoriasService = CategoriasService;
        this.eventos = [];
        this.categorias = [];
    }

    slideMenu() {
        this.ionicSideMenuDelegate.toggleLeft();
    }

    $onInit() {
        this.categoriasService.findAll()
            .then(categorias => this.categorias = categorias);

        this.eventoService.findAll()
            .then(eventos => this.eventos = eventos);


    }

}