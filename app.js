'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Constant = require('./utility/constant');

process.env.ENV = process.env.ENV || Constant.ENV.LOCAL;

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json({ limit: '60mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '60mb', extended: true }));

require('./db-connections/mongodb'); //we can write a separate initialise.js if we have more actions to be taken on service sstartup

const RouteURLs = require('./route')(app);

app.listen(port, () => {
    console.info({}, "Holofy Book server is running on port " + port);
});

module.exports = app;