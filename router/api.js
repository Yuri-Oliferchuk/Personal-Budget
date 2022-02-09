const express = require('express');
const apiRouter = express.Router();
const envRouter = require('./envelopes.js')
const transRouter = require('./transactions.js')

apiRouter.use('/envelopes', envRouter);
apiRouter.use('/transactions', transRouter);


module.exports = apiRouter;