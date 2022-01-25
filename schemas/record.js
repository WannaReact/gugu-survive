const mongoose = require('mongoose');

const { Schema } = mongoose;

const Record = new Schema(
  {
    username: String,
    score: Number,
    round: Number,
    combo: Number
  },

  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model('Record', Record);
