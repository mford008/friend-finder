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
// where the caculation should be done
var bestMatch = {
	name: "",
	picture: "",
	friendDifference: 0
}

var newFriend = req.body;
var newFriendName = newFriend.name;
var newFriendPicture = newFriend.picture;
var newFriendScores = newFriend.scores;

var totalDifference = 0;

for (var i = 0; i < friends.length; i++) {
	console.log(friends[i].name);
		totalDifference = 0;

		for (var j = 0; j < friends[i].scores[j]; j++) {
			totalDifference += Math.abs((newFriendScores[j]) - (friends[i].scores[j]));
		}
}

bestMatch.name = friends[i].name;
bestMatch.picture = friends[i].picture;
bestMatch.friendDifference = totalDifference;

friends.push(newFriend);
res.json(bestMatch);
});





// not entirely necessary
app.post("/api/clear", function() {
	friends = [];

	console.log("Cleared: " + friends);
});





};