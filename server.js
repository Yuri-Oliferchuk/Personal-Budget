const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Rarse JSON request
app.use(bodyParser.json());

// Mount your existing apiRouter below at the '/api/' path.
const apiRouter = require('./router/api.js');
app.use('/api', apiRouter);

// Start our server
app.listen(PORT, () => console.log('Server started...'));