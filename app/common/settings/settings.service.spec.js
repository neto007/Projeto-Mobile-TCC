import { expect } from 'chai';
import Service from './settings.service';
import angular from 'angular';
import angularMocks from 'angular-mocks';

describe('settings Service', () => {

  let settingsService;
  beforeEach(angular.mock.module('mobile.app.common'));

  beforeEach(inject(($injector) => {
    settingsService = $injector.get('SettingsService');
  }));

  it('Deve retornar o url da api', () => {
    let url = settingsService.getApiUrl();

    expect(url).to.be.a('string');
  });

  it('Deve retornar a url da api com um endpoint', () => {
    let url = settingsService.getApiUrl();

    let urlWithEndpoint = settingsService.getApiUrlWithEndpoint('pessoas');

    expect(urlWithEndpoint).to.equal(`${url}/pessoas`);
  });
});
