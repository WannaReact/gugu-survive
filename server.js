const express = require('express');
const webpack = require('webpack');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const addRecordRoute = require('./routes/addRecord');
const leaderboardRoute = require('./routes/leaderboard');

const PORT = process.env.PORT || 3000;
const app = express();
const compiler = webpack(webpackConfig);
const middleware = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
});

dotenv.config({ path: 'variables.env' });
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('✅ Connected to database');
  }
});

app.use(express.json());

app.use(middleware);

app.use(
  webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  })
);

app.use('/', addRecordRoute);

app.use('/', leaderboardRoute);

app.use((req, res, next) => {
  res.status(404).send('잘못된 주소입니다.');
});

app.listen(PORT, () => console.log(`👂 listening on ${PORT}`));
