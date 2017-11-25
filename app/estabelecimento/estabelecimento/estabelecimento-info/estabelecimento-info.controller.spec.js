import { expect } from 'chai';
import Controller from './estabelecimento-info.controller';

describe('estabelecimento-info Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
