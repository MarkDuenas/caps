'use strict';

const {order, delivered} = require('../vendor.js');

describe(' DRIVER TESTS ', () => {
  const payload = {
    storeName : "Random Store",
    orderID : '123456789',
    customerName: 'Jake',
    address: '123 Baker Street'
  }
  let spy;

  beforeEach( () => {
    spy = jest.spyOn(console, 'log');
  });

  afterEach( () => {
    spy.mockRestore();
  });
  
  it('should log the pick up event', () => { 
    order();
    expect(spy).toHaveBeenCalled();
  });

  it('should log the transit event', () => {
    delivered(payload)
    expect(spy).toHaveBeenCalled();
  });

});