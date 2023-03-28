const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
    res.send(`
        <h1>List of Users</h1>
        
        <ul>
            <li>Luis Murrugarra</li>
            <li>Rosa Coronel</li>
            <li>Ana Karina</li>
            <li>Carla Ramirez</li>
            <li>Gabriel Dasilva</li>
        </ul>
        <p><a href="/">Go back</a></p>
        `);
    });
    
    app.use('/', (req, res, next) => {
        res.send(`
        <h1>This is the root url!</h1>
        <p><a href="/users">Go to users</a></p>
    `);
});

app.listen(5000);