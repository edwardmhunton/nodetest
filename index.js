'use strict';

const express = require('express');

// Constants
const PORT = 8080;
//const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Linius from Fargate!!!!!!@Arrag, still not working 10');
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
