const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  cast:[{
    type:mongoose.Types.ObjectId,
    ref:'Celebrity'
  }]
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;
