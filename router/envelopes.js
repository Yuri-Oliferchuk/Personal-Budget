const express = require('express');
const envRouter = express.Router();
const {database} = require('../database/db.js')
const { 
    addToDatabase,   
    selectById,
    updateElement,
    deleteById,} = require('../database/func.js')

//Standart routers
envRouter.get('/', (res, req, next) => {
    req.send(database);
});

envRouter.get('/:id', (req, res, next) => {
    res.send(selectById(database, req.params.id));
});

envRouter.post('/', (req, res) => {
    res.status(201).send(addToDatabase(database, req.body));
});

envRouter.put('/', (req, res, next) => {
    updateElement(database, req.body);
    res.send(selectById(database, req.body.id))
});

envRouter.delete('/:id', (req, res, next) => {
    deleteById(database, req.params.id);
    res.status(204).send();
});

envRouter.post('/transfer/:from/:to', (req, res, next) => {
    const from = selectById(database, req.params.from);
    const to = selectById(database, req.params.to);
    from.quantity -= req.body.quantity;
    to.quantity += req.body.quantity;
    res.status(202).send();
})

module.exports = envRouter;