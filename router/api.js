const express = require('express');
const apiRouter = express.Router();

//Standart routers
apiRouter.get('/', (res, req, next) => {
    req.send('Hello World');
});

module.exports = apiRouter;