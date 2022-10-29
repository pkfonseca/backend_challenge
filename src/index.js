const express = require('express');
const app = express();
const port = 3000;
const queries = require("./database/query/_getUser");
const db = require('./database/config/_configDB');

app.get('/', async (req, res) => {
  res.send('Hi!')
})

app.get('/search_user', queries );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
