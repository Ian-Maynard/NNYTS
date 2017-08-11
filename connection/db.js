//  Mongo setup
var mongoose = require("mongoose");
var app = require("express"); 

mongoose.connect("mongodb://localhost/nytappv2");
var db = mongoose.connection;
db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");
});
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

module.exports = db; 