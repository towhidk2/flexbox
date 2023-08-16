const express = require('express');
const server = require('live-server');

const app = express();

// Serve HTML and other assets
app.use(express.static('/'));

// Start the live server
server.start({
  port: 8080,
  root: '.',
  open: true,
});