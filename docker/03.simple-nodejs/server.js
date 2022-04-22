'use strict';

const { json } = require('express');
const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  //res.send(req);
  res.send("hello")
  //res.send(JSON.stringify(req.headers))
  // res.json({
  //   'data':req.headers
  // })
 // console.log(req)
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);