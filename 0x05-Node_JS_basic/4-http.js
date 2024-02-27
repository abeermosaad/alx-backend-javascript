const http = require('http');

const port = 1245;
const app = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  res.end('Hello Holberton School!');
};

const server = http.createServer(app);
server.listen(port);
