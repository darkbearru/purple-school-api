import http from 'http';

const host = '127.0.0.1';
const port = 8900;

const server = http.createServer( (req, res) => {
    console.log(req);
    res.statusCode = 200;
    res.setHeader ('Content-type', 'text/plain');
    res.end ('Привет');
});

server.listen(port, host, () => {
    console.log(`Started on ${host}:${port}`);
});