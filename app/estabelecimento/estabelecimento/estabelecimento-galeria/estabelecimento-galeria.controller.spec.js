import { expect } from 'chai';
import Controller from './estabelecimento-galeria.controller';

describe('estabelecimento-galeria Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
