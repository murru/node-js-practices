const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', (req, res, next) => {
    res.send(`
        <h1>Body Parser Practice</h1><br /><br />
        <form action="/process-form" method="POST">
            <label>Full Name:</label><br />
            <input name="full_name" type="text" /><br />
            <button type="submit">Submit</button>
        </form>
    `);
});

app.use('/process-form', (req, res, next) => {
    console.log(req);
    console.log(req.body);
    res.redirect('/');
});

app.listen(3030);