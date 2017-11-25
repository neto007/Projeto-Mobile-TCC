import { expect } from 'chai';
import Controller from './cidades.controller';

describe('cidades Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
