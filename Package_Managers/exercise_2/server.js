const textLogic = require("./text.js");

const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

http.createServer((req, res) =>  {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(textLogic);
    }).listen(port, hostname);

