/* dependencies */
const express = require('express');
const cors = require('cors');

/* routers */
const projectsRouter = require('../routes/projectsRouter');

/* server pipeline */
const server = express();
server.use(express.json());
server.use(cors());

/* server pipeline - routes */
server.use('/api/projects', projectsRouter);

/* GET '/' */
server.get('/', (req, res) => {
    res.send('Hello from Express!');
});

module.exports = server;
