import styles from './chega-mais.scss';

export default class {

    constructor($ionicSideMenuDelegate, $ionicModal, $state) {
        'ngInject';

        this.ionicSideMenuDelegate = $ionicSideMenuDelegate;
        this.ionicModal = $ionicModal;
        this.state = $state;
        this.ionicModal.fromTemplateUrl('modalFilter.html', {
            animation: 'slide-in-up'
        });

        /*this.ionicModal.fromTemplateUrl('modalFilter.html', {
          animation: 'slide-in-up'
        }).then(function(ionicModal) {
          this.ionicModal = ionicModal;
        });*/
    }

    slideMenu() {
        this.ionicSideMenuDelegate.toggleLeft();
    }

    openModal() {
        console.log("NUM PASSA AQUI")
    }

    concluir() {
        alert("Usaurios Convidados")
        this.state.go("home");
    }

}