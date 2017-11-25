import { expect } from 'chai';
import Controller from './voucher-profile.controller';

describe('voucher-profile Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
