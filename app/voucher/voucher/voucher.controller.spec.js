import { expect } from 'chai';
import Controller from './voucher.controller';

describe('voucher Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
