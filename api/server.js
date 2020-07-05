/* import dependencies */
const express = require('express');

/* server pipeline */
const server = express();

/* import routes */
// server.use('/api/projects', projectRouter);

/* GET '/' */
server.get('/', (req, res) => {
    res.send('Hello from Express!');
});

module.exports = server;
