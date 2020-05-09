

require('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);



const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true,}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

// routes to ejs pages


// home
app.get('/home');

// bio

// projects

// Force Error
//404 Not Found
// 500 error handler


// server start up
function startServer(PORT) {
  app.listen( PORT, () => console.log('The server is up on', PORT));
}

client.connect()
  .then(() => {
    startServer(PORT);
  })
  .catch( error => console.error(error.message));