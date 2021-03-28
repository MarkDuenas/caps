'use strict';
const faker = require('faker');
const event = require('./event.js');


event.on('delivered', delivered);
event.on('order', order);

function order(){
  console.log('*** ORDER EVENT *** ');
  console.log(new Date);
  const order = {
    storeName : "Random Store",
    orderID : faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress()
  };
  console.log(order);
  console.log('================================');
  event.emit('pickup', order);
}


function delivered(payload){
  console.log(`Thank You for delivering ${payload.orderID} for ${payload.customerName}`, new Date);
  console.log('================================');
}

module.exports = {
  order: order,
  delivered: delivered,
}