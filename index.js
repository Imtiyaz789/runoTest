require('dotenv').config();

const express = require('express');
const cors = require('cors');

const jwt = require('jsonwebtoken');

const port = process.env.PORT || 8000;

const db = require('./config/conn');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// use express router
app.use('/', require('./routes/index'));

app.listen(port, function (err) {
    if (err) {
        console.log(`error in running the server: ${err}`)
    }

    console.log(`server is running on port: ${port}`);
})