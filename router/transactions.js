const express = require('express');
const envRouter = express.Router();
const transactions = require('../database/transactions_func.js')


envRouter.get('/', transactions.getAllTransactions);
envRouter.get('/:id', transactions.getTransaction);

envRouter.post('/:from/:to', transactions.addMoveTransaction);
envRouter.post('/:to', transactions.addNewTransaction);
envRouter.post('/', transactions.addSubTransaction);

envRouter.delete('/:id', transactions.deleteTransactionById)


module.exports = envRouter;