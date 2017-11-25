import styles from './login.scss';

export default class {

  constructor(LoginService, $state) {
    'ngInject';

    this.loginService = LoginService;
    this.state = $state;
  }

  entrarComFacebook() {
    this.loginService.login(() => {
      this.state.go("home");
    }, (err) => {
      alert("Ocorreu um erro ao efetuar o login.");
    });
  }

  $onInit() {
  }

  $onChanges() {
  }

  $onDestroy() {
  }
}
