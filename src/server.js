require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');

// Port should match webpack config URL
const port = 7700;

const app = express();

/* eslint-disable global-require */
if(process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const config = require('../webpack.config');
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: config.output.publicPath,
    stats: { colors: true },
    historyApiFallback: true
  }));

  app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 2000
  }));
}

app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(process.env.PORT || port, () => {
  /* eslint-disable no-console */
  console.log(`Listening on port ${port}`);
});
