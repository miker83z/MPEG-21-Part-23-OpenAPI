'use strict';

var path = require('path');
var http = require('http');
var cors = require('cors');

var oas3Tools = require('oas3-tools');
var serverPort = 8080;

// swaggerRouter configuration
var options = {
  routing: {
    controllers: path.join(__dirname, './controllers'),
  },
};

var expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, 'api/openapi.yaml'),
  options
);
var app = expressAppConfig.getApp();

// Add headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );
  res.setHeader('Access-Control-Allow-Credentials', true);

  next();
});

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
  console.log(
    'Your server is listening on port %d (http://localhost:%d)',
    serverPort,
    serverPort
  );
  console.log(
    'Swagger-ui is available on http://localhost:%d/docs',
    serverPort
  );
});
