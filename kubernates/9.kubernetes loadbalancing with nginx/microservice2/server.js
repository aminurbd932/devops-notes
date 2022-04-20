'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('server 2');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);