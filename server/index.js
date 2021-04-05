const path = require('path');
const http = require('http');
const express = require('express');

const DEBUG = (process.env.NODE_ENV === 'development');
const webpack = DEBUG ? require('webpack') : null;
const webpackDevMiddleware = DEBUG ? require('webpack-dev-middleware') : null;
const webpackHMR = DEBUG ? require('webpack-hot-middleware') : null;
const webpackConfig = DEBUG ? require('../webpack.dev') : null;

const routes = require('./routes');


// Initialize application server.
const app = express();
const server = http.Server(app);


// Express middlwwares.

// If in development mode, then config HMR.
if (DEBUG) {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, { publicPath: webpackConfig.output.publicPath }));
  app.use(webpackHMR(compiler));
}


// express.static with index: false to avoid serve the index.html from the public directory.
app.use(express.static(path.join(__dirname, '../public'), { index: false }));


// View
app.use('/', routes);


// Run the server.
server.listen(process.env.PORT || 5000);
