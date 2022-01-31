const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recordRoute = require('./routes/record');

const PORT = process.env.PORT || 3001;
const app = express();

dotenv.config({ path: 'variables.env' });
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('✅ Connected to database');
  }
});

app.use(express.static(path.resolve(__dirname, './build')));
app.use(express.json());

app.use('/record', recordRoute);

app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.listen(PORT, () => console.log(`👂 listening on ${PORT}`));
