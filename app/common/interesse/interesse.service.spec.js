import angular from 'angular';
import angularMock from 'angular-mocks';
import { expect } from 'chai';

describe('Interesse Service', () => {

  let interesseService;

  beforeEach(angular.mock.module('mobile.app.common'));

  beforeEach(inject(($injector) => {
    let $httpBackend = $injector.get('$httpBackend');
    interesseService = $injector.get("InteresseService");
    
    let settings = $injector.get("SettingsService");

    let url = settings.getApiUrlWithEndpoint('interesses');
    
    $httpBackend.when('GET', url)
      .respond({
        code: 200,
        message: "Lorem ipsum",
        data: [
          {"id":"1","createdAt":1496447729,"nome":"nome 1"},
          {"id":"2","createdAt":1496447669,"nome":"nome 2"}        
        ]
      });
    
    $httpBackend.when('POST', `${url}`)
      .respond({
        code: 200,
        data: {"id":"2","createdAt":1496447669, "usuario":"usuário 1", "categoria":"categoria 2"}
      })
  }));

  it('Testar findAllCategorias', () => {
    interesseService.findAllCategorias().then((categorias) => {
      expect(categorias).lengthOf(2);
      expect(categorias[0]).an.object();
      expect(categorias[0]).have("id");
      expect(categorias[0]).have("nome");
    });
  });

  it('Testar create', () => {
    interesseService.createInteresses({}).then((interesse) => {
      expect(interesse).an.object();
      expect(interesse).have("usuario");
      expect(interesse).have("categoria");
    });
  });
});
