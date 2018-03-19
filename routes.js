/**
 * Main application routes
 */

'use strict';

const express = require('express');
const router = express.Router();

const ordersAPI = require('./api/order');

module.exports = config => {

    // Insert routes below.
    router.use('/api/orders', ordersAPI(config));

    return router;
};