export default class InteresseService {
  constructor($http, SettingsService) {
    'ngInject';
    
    this.$http = $http;

    this.url = SettingsService.getApiUrlWithEndpoint("interesses");
  }

  findAllCategorias() {
    return this.$http.get(this.url)
      .then((response) => response.data);
  }

  createInteresses(categorias) {
    return this.$http.post(`${this.url}`, categorias)
      .then((categorias) => categorias.data);
  }
}