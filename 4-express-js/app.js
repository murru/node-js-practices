// Import express module.
const express = require('express');
// Create express app.
const app = express();

// Create middlewares
app.use('/test', (req, res, next) => {
    res.send('<h1>Hello test!!</h1>');
});
app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express JS!!</h1>');
});

app.listen(3030);