const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4000, () => {
  console.log('I AM WORKING!!!');
});