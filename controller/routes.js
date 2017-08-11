var app = express(); // Express
var router = express.Router(); // Express router
var bodyParser = require("body-parser"); // Body-Parser
var model = require("./models/art.js");

app.get("/api/saved", function(req, res) {
                Art.find({})
                    .exec(function(err, doc) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.send(doc);
                    }
                    });
}); //  Read/display all 

                // Route to add an Art to saved list
    app.post("/api/saved", function(req, res) {
                var newArt = new Art(req.body);
                console.log(req.body);
                newArt.save(function(err, doc) {
                    if (err) {
                    console.log(err);
                    }
                    else {
                    res.send(doc);
                    }
                });
     });

                // Route to delete an Art from saved list
    app.delete("/api/saved/", function(req, res) {
                var url = req.param("url");
                Art.find({ url: url }).remove().exec(function(err) {
                    if (err) {
                    console.log(err);
                    }
                    else {
                    res.send("Deleted");
                    }
                });
     });
                // Any non API GET routes will be directed to our React App and handled by React Router
    app.get("*", function(req, res) {
                res.sendFile(__dirname + "/public/index.html");
    });

module.exports = router;