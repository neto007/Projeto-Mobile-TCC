export default class {

  constructor(SettingsService, $http) {
    'ngInject';

    this.settingsService = SettingsService;
    this.http = $http;
  }

  findAll() {
    return this.http.get(this.settingsService.getApiUrlWithEndpoint('voucher'))
      .then(response => response.data);
  }

  findById(id) {
    return this.http.get(this.settingsService.getApiUrlWithEndpoint('voucher/'+id))
      .then(response => response.data);
  }

  findByEvento(eventoId) {
    return this.http.get(this.settingsService.getApiUrlWithEndpoint('evento/'+eventoId+'/voucher'))
      .then(response => response.data);
  }

  findByEstabelecimento(estabelecimentoId) {
    return this.http.get(this.settingsService.getApiUrlWithEndpoint('estabelecimento/'+estabelecimentoId+'/voucher'))
      .then(response => response.data); 
  }

  adquirirVoucher(voucherId) {
    return this.http.post(this.settingsService.getApiUrlWithEndpoint(`voucher/${voucherId}/gerar`))
      .then(response => response.data);
  }

  confirmarVoucher(voucherId) {
    return this.http.post(this.settingsService.getApiUrlWithEndpoint(`voucher/${voucherId}/confirmar`))
      .then(response => response.data);
  }
}