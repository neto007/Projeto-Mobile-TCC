import { expect } from 'chai';
import Controller from './usuario-profile.controller';

describe('usuario-profile Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
