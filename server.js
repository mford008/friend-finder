// basic server logic goes here
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

//standard stuff along with bodyParser?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require("./app/routing/apiRoutes")(app); //why is app there?
// require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
	console.log("Listening on port: " + PORT);
})
