const requestHandler = (req, res) => {

    const { url, method } = req;

    if(url === '/users') {
        res.setHeader('content-type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>Node JS Course - Academind</title>
                </head>
                <body>
                    <h1>List of Users</h1>
                    
                    <ul>
                        <li>Luis Murrugarra</li>
                        <li>Rosa Coronel</li>
                        <li>Ana Karina</li>
                        <li>Carla Ramirez</li>
                        <li>Gabriel Dasilva</li>
                    </ul>
                    <p><a href="/">Go back</a></p>
                </body>
            </html>
        `);
        return res.end();
    }

    if(url === '/form') {
        res.setHeader('content-type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>Node JS Course - Academind</title>
                </head>
                <body>
                    <h1>List of Users</h1>
                    
                    <form action="/submit-form" method="POST">
                        <input name="email" placeholder="Email address" /><br/>
                        <input type="password" name="psswd" placeholder="Password" /><br />
                        <button type="submit">SEND</button>
                    </form>
                    <p><a href="/">Go back</a></p>
                </body>
            </html>
        `);
        return res.end();
    }

    if(url === '/submit-form') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const data = parsedBody.split('&');
            console.log(data);
            return res.end();
        });
    }

    res.setHeader('content-type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>Node JS Course - Academind</title>
            </head>
            <body>
                <h1>Assigment One</h1>
                <p>Welcome to Alex's first assignment!</p>
                <p><a href="/users">Go to users list</a></p>
                <p><a href="/form">Go to form</a></p>
            </body>
        </html>
    `);
    return res.end();
}

module.exports = requestHandler;