const generateText = require('./text');

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    const result = generateText();
    res.end(result);
};

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
