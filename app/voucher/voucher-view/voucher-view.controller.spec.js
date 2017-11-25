import { expect } from 'chai';
import Controller from './voucher-view.controller';

describe('voucher-view Controller', () => {
  it('Should be constructed', () => {
    // Arrange
    const controller = new Controller();

    // Act

    // Assert
    expect(controller).not.to.be.undefined;
  });
});
