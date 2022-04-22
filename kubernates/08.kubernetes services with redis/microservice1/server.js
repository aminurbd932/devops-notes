'use strict';

const express = require('express');

// Constants
const PORT = 7001;
const HOST = 'localhost';

// App
const app = express();
app.get('/ms', (req, res) => {
  res.send('microservice 1');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);