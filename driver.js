'use strict';

const event = require('./event.js');

event.on('pickup', driverPickUp);
event.on('in-transit', transit);
event.on('delivered', delivered);


function driverPickUp(payload){
  setTimeout( () => {
    console.log('*** PICKUP EVENT *** ');
    console.log(new Date);
    console.log(`DRIVER: picked up order ${payload.orderID}`);
    console.log('================================');
    event.emit('in-transit', payload);
  }, 1000);

  setTimeout( () => {
    event.emit('delivered', payload);
  }, 3000);
};

function transit(payload){
  console.log('*** TRANSIT EVENT *** ');
  console.log(new Date);
  console.log(`Order: ${payload.orderID} for ${payload.customerName} in Transit`);
  console.log('================================');
};

function delivered(payload){
  console.log('*** DELIVERED EVENT *** ');
  console.log(new Date);
  console.log(`Order: ${payload.orderID} for ${payload.customerName} Delivered`);
  console.log('================================');
};

module.exports = {
  driverPickUp: driverPickUp,
  transit: transit,
  delivered: delivered,
}

