export default class {

    constructor(SettingsService, $http) {
        'ngInject';


        this.$http = $http;

        this.url = SettingsService.getApiUrlWithEndpoint("user/cidade");

    }

    selecionarCidade(cidade) {
        console.log("cidade: " + cidade)
        return this.$http.post(`${this.url}`, cidade)
            .then((cidade) => cidade.data);
    }

    create(estabelecimento) {
        return this.$http.post(`${this.url}`, estabelecimento)
            .then((estabelecimento) => estabelecimento.data);
    }


}