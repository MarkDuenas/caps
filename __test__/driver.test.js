'use strict';

const {driverPickUp, transit, delivered } = require('../driver.js');



describe(' DRIVER TESTS ', () => {

  const order = {
    storeName : "Random Store",
    orderID : '123456789',
    customerName: 'Jake',
    address: '123 Baker Street'
  }
  let spy;

  beforeEach( () => {
    spy = jest.spyOn(console, 'log');
    jest.useFakeTimers();
  });

  afterEach( () => {
    spy.mockRestore();
    jest.useRealTimers();
  });
  
  it('should log the pick up event', () => { 
    driverPickUp(order);
  
    jest.advanceTimersByTime(1000);
    expect(spy).toHaveBeenCalledWith('DRIVER: picked up order 123456789'); //Tests after 1 second delay
  });

  it('should log the transit event', () => {
    transit(order);
    expect(spy).toHaveBeenCalledWith('Order: 123456789 for Jake in Transit');
  });

  it('should log the delivered event', () => {
    delivered(order);
    expect(spy).toHaveBeenCalledWith('Order: 123456789 for Jake Delivered');
  });

});