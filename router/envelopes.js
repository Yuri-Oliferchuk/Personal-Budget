const express = require('express');
const envRouter = express.Router();
const db = require('../database/func.js')


envRouter.get('/', db.getAll);
envRouter.get('/:id', db.getById);

envRouter.post('/', db.addToDatabase);
// envRouter.post('/transfer/:from/:to', db.moveQuantity)

envRouter.put('/', db.updateElement)
envRouter.delete('/:id', db.deleteById)


module.exports = envRouter;