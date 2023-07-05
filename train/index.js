import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import refresh from './token.js';
// const http = require('http');

//creating app object
const app = express();
dotenv.config();
//creating a route
app.use(express.json());
app.get('/', (req, res) => {
  res.json({
    message: 'welcome to lion api',
  });
});

app.get('/train', async (req, res) => {
  const url = 'http://104.211.219.98/train/trains';
  const token = process.env.TOKEN;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    });
    if(responseData.message.split(' ')[0] === 'token'){
        await refresh();
        res.json({
            message: 'token refreshed',
        })
    }
    const responseData = await response.json();
    res.json(responseData);
  } 
  catch(message){
    
  }
});

app.listen(8000, () => {
  console.log('server is listening on port 8000');
});
