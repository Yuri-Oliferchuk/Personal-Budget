const express = require('express');
const apiRouter = express.Router();
const envRouter = require('./envelopes.js')

apiRouter.use('/envelopes', envRouter);


module.exports = apiRouter;