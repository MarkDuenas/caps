'use strict';

require('./driver.js');
require('./vendor.js');

const event = require('./event');

setInterval(() => {
  event.emit('order')
}, 5000);



