const http = require('http');

const port = 1245;
const app = (req, res) => {
  res.end('Hello Holberton School!');
};

const server = http.createServer(app);
server.listen(port);
