export default class {

  constructor(SettingsService, $http) {
    'ngInject';

    this.settingsService = SettingsService;
    this.http = $http;
  }

  findAll() {
    return this.http.get(this.settingsService.getApiUrlWithEndpoint('evento'))
      .then(response => response.data);
  }

  findById(id) {
    return this.http.get(this.settingsService.getApiUrlWithEndpoint('evento/'+id))
      .then(response => response.data);
  }
    
  confirmarPresenca(id) {
    return this.http.post(this.settingsService.getApiUrlWithEndpoint('evento/'+id+'/confirmarPresenca'))
      .then(response => response.data);
  }

  findPessoasConfirmadas(id) {
    return this.http.get(this.settingsService.getApiUrlWithEndpoint('evento/'+id+'/pessoasConfirmadas'))
      .then(response => response.data);
  }
}