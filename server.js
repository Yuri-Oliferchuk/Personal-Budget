const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Rarse JSON request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// Mount your existing apiRouter below at the '/api/' path.
const apiRouter = require('./router/api.js');
app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('Hello')
});

// Start our server
app.listen(PORT, () => console.log('Server started...'));
