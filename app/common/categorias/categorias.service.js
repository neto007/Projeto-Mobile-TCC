export default class {

  constructor(SettingsService, $http) {
    'ngInject';

    this.settings = SettingsService;
    this.http = $http;
  }

  findAll() {
    return this.http.get(this.settings.getApiUrlWithEndpoint('estabelecimentoCategoria'))
      .then((response) => response.data);
  }
}