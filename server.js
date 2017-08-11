var PORT = process.env.PORT || 3000;
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json" }));
app.use(express.static("public"));
