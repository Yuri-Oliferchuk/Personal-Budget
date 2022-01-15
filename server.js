const express = require('express');
const app = express();
const PORT = 3000;

// Mount your existing apiRouter below at the '/api/' path.
const apiRouter = require('./router/api.js');
app.use('/api', apiRouter);

// Start our server
app.listen(PORT, () => console.log('Server started...'));