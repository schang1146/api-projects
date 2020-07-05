/* import dependencies */
const express = require('express');

/* server pipeline */
const server = express();

/* GET '/' */
server.get('/', (req, res) => {
    res.send('Hello from Express!');
});

module.exports = server;
