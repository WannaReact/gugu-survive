const express = require('express');
const Record = require('../schemas/record');

const router = express.Router();

router.post('/addRecord', async (req, res) => {
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
    res.send(
      `이름: ${username} | 점수: ${score} | 라운드: ${round} | 콤보: ${combo}`
    );
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
