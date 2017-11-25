export default class {

  constructor(SettingsService, $http) {
    'ngInject';

    this.settings = SettingsService;
    this.http = $http;
  }

  findAll() { 
    return this.http.get(this.settings.getApiUrlWithEndpoint('estabelecimento'))
      .then((response) => response.data);
  }

  findById(id) {
    return this.http.get(this.settings.getApiUrlWithEndpoint('estabelecimento/'+id))
      .then((response) => response.data);
  }
}