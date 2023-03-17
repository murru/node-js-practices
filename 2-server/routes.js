// Create constants to work with.
const fs = require('fs');

const requestHandler = (req, res) => {
    const { url, method } = req;

        // Content to render on web browser if url is equal to '/form'.
    if (url === '/form') {
        res.setHeader('content-type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>First Node JS Server Example</title>
                </head>
                <body>
                    <h1>Fill the form!</h1>
                    <form action="/submit-form" method="POST">
                        <p>
                            <label>Random text</label><br/>
                            <textarea name="text"></textarea>
                        </p>
                        <button type="submit">SEND</button>
                    </form>
                </body>
            </html>
        `);
        return res.end();
    }

    // Actino when url is equal to '/submit-form' and method is equal to 'POST'.
    if (url === '/submit-form' && method === 'POST') {
        // Set array to save data from form.
        const body = [];

        // Register data receiving event from form.
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // Register 
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const text = parsedBody.split('=')[1];
            fs.writeFileSync('form-data.txt', text, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    // Content to render on web browser.
    res.setHeader('content-type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>First Node JS Server Example</title>
            </head>
            <body>
                <h1>Welcome!</h1>
                <p>This is my first website rendered with SSR using Node JS!</p>
                <p><a href="/form">Go to form page</a></p>
            </body>
        </html>
    `);
    return res.end();
}

module.exports = requestHandler;