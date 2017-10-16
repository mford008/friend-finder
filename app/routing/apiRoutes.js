var friends = require("../data/friends");
// var waitListData = require("../data/waitinglistData");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
	res.json(friends);
})


app.get("/api/home", function(req, res) {
// res.json(Data);
console.log("friends!");
});


app.get("/api/survey", function(req, res) {
res.json(friendData);
})


app.post("/api/friends", function(req, res) {
	friends.push(req.body);
	res.json(true);
});

app.post("/api/clear", function() {
	friends = [];

	console.log("Cleared: " + friends);
});

};