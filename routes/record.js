const express = require('express');
const Record = require('../schemas/record');

const router = express.Router();

router.get('/', async (req, res) => {
  const { order, isReverse } = req.query;
  const orders = ['score', 'round', 'combo'];
  orders.splice(orders.indexOf(order), 1);
  const direction = isReverse ? -1 : 1;
  try {
    const record = await Record.find({}, '_id username score round combo')
      .sort([
        [order, direction],
        [orders[0], direction],
        [orders[1], direction],
        ['_id', -direction]
      ])
      .limit(200);
    res.json(record);
  } catch (err) {
    res.send(err);
  }
});

router.post('/', async (req, res) => {
  const { username, score, round, combo } = req.body;
  if (!score) return;
  const record = new Record({
    username,
    score,
    round,
    combo
  });
  try {
    await record.save();
    res.send('success');
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
