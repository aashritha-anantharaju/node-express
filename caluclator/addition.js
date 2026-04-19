const handler = (req, res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('Welcome to the Calculator')
        res.write('<a href="/calculator">Calculator</a>')
        return res.end();
    }
    if(req.url === '/calculator'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<form action="/result" method="post">')
        res.write('<input type="number" id="num1" name="num1"></input>')
        res.write('<input type="number" id="num2" name="num2"></input>')
        res.write('<button type="submit">Submit</button>')
        res.write('</form>')
        return res.end();
    }
    if(req.url === '/result' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(parsedBody);
            const bodyObj = Object.fromEntries(params);
            const result = parseInt(bodyObj.num1) + parseInt(bodyObj.num2);
            res.setHeader('Content-Type', 'text/html');
            res.write(`<p>Result: ${result}</p>`);
            return res.end();
        });
        return;
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('Page Not Found')
    res.statusCode = 404
    res.write('<a href="/">Go To Home</a>')
    res.end()
}

module.exports = handler;