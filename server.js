const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
const compiler = webpack(webpackConfig);
const middleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
});

app.use(middleware);
app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })
);
app.use((req, res, next) => {
  res.status(404).send('잘못된 주소입니다.');
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
