const express = require('express');
const proxy = require('http-proxy-middleware');
const PORT = 4321;
app = express();

app.use(proxy('/api/checkout', {target: 'http://ec2-18-223-235-255.us-east-2.compute.amazonaws.com/'}));
app.use(proxy('/api/seller', {target: 'http://ec2-54-198-134-153.compute-1.amazonaws.com:5000/'}));
app.use(proxy('/products', {target: 'http://ec2-52-15-165-67.us-east-2.compute.amazonaws.com:3333/'}));
app.use(proxy('/api', {target: 'http://localhost:4000'}));
app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}:`)
});
