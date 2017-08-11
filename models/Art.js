var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArtSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

var Art = mongoose.model("Art", ArticleSchema);
module.exports = Art;