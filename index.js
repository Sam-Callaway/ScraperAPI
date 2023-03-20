const cheerio = require ('cheerio');
const express = require('express');
const request = require('request');
require('dotenv').config();

var cors = require('cors')

const apiKey = process.env.apiKey
const app = express();
app.use(cors())

app.get('/', (req, res) => {
  const requestedUrl = req.query.url;
  const key = req.query.key
  if (key == apiKey){
  request(requestedUrl, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html)
      let arr = $('p').toArray().map((x) => { return $(x).text()});
      res.send(arr)
    } else {
      res.status(response.statusCode).send(error);
    }
  });
  } else {res.send("Incorrect key")}
});

const port = process.env.PORT || 2000

app.listen(port, () => console.log(`Server started on port ${port}`));