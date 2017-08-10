var PORT = process.env.PORT || 3000;
var express = require("express");

var bodyParser = require("body-parser");
var logger = require("morgan");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

// Mongo-Mongoose config
var mongoose = require("mongoose");
var = require("/model");
mongoose.connect(mongodb: "//localhost/nytappv2");

var db = mongoose.connection;
db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");
});