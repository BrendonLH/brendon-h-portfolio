'use strict';

require('dotenv').config();
// const cors = require('cors');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// app.use(cors());
app.use(express.static('./public'));


app.use('*', (request, response) => response.send('Sorry, that route does not exist.'));
app.listen( PORT, () => console.log('The server is up on', PORT));