const express = require('express');
const Record = require('../schemas/record');

const router = express.Router();

router.get('/leaderboard', async (req, res) => {
  const { order, isReverse } = req.query;
  try {
    const record = await Record.find({}, '_id username score round combo')
      .sort({ [order]: isReverse ? -1 : 1 })
      .limit(100);
    res.json(record);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
