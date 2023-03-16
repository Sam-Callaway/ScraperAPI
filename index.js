import dotenv from 'dotenv';
dotenv.config();
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express'
const app = express()

const apiKey = process.env.apiKey

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
//app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint
app.get('/', (req, res) => {
  const searchURL = req.query.search
  const providedKey = req.query.apiKey
  if (providedKey === apiKey){  
  res.send(scraper(searchURL));
  } else {res.status(403)}
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});



function scraper(articleURL){
    // Fetch the article content
    fetch(articleUrl)
    .then(response => response.text()) // Convert response to text
    .then(html => {
        // Parse the HTML response using DOMParser
        const $ = cheerio.load(html)
        

        // Do something with the article text
        return($('p').text());
    })
    .catch(error => console.error(error)); // Handle any errors
}