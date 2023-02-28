const generatePosts = require('./posts');
const http = require('http');
const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    if(req.url === '/posts') {
        res.statusCode = 200;
        res.end(JSON.stringify(generatePosts()));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});