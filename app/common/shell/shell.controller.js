import styles from './shell.scss';

export default class {

  constructor($state, $ionicSideMenuDelegate, LoginService) {
    'ngInject';


    // css-modules (https://github.com/webpack/css-loader#css-modules)
    this.styles = styles;
    this.state = $state;
    this.ionicSideMenuDelegate = $ionicSideMenuDelegate;

    this.user = LoginService.getUserBasicData();
  }

  openLink(route) {
    this.ionicSideMenuDelegate.toggleLeft();
    this.state.go(route);
  }


  $onInit() {
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
