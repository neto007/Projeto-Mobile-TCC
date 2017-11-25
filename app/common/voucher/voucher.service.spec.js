import { expect } from 'chai';
import Service from './voucher.service';

describe('voucher Service', () => {
  it('Should be constructed', () => {
    // Arrange
    const service = new Service();

    // Act

    // Assert
    expect(service).not.to.be.undefined;
  });
});
