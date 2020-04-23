'use strict';

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const superagent = require('superagent');

const PORT = process.env.PORT;

const app = express();
app.use(cors());


app.listen( PORT, () => console.log('Server up on', PORT));