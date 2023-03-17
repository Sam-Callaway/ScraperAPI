// const express = require('express');
// const request = require('request');

// const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/jokes/random', (req, res) => {
//   request(
//     { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`listening on ${PORT}`));


// ES6 or TypeScript:
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

console.log("starting")

// URL of the article to fetch
const articleUrl = 'https://www.bbc.co.uk/news/business-64963523';

// Fetch the article content
fetch(`https://www.bbc.co.uk/news/business-64963523`)
.then(response => response.text()) // Convert response to text
.then(html => {
  // Parse the HTML response using DOMParser
  const $ = cheerio.load(html)
  

  // Do something with the article text
  console.log($('p').text());
})
.catch(error => console.error(error)); // Handle any errors