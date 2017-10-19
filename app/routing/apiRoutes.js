var friends = require("../data/friends");
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  })

  app.get("/api/home", function(req, res) {
    console.log("friends!");
  });

  app.get("/api/survey", function(req, res) {
    res.json(friendData);
  })

  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);


// best friend match calculation, under testing
var bestMatch = {
	name: "",
	picture: "",
  totalDifference: 0
  // friendDifference: 0 //individual difference this friend has from most recent survey input
}

// var newFriend = req.body;
// var newFriendName = newFriend.name;
// var newFriendPicture = newFriend.picture;
// var newFriendScores = newFriend.scores;

// var totalDifference = 0;

for (var i = 0; i < friends.length; i++) {
	console.log(friends[i].name); //working
		var totalDifference = 0;

		for (var j = 0; j < friends[i].scores[j]; j++) {
  console.log(friends[i].scores);//not logging whole array
			totalDifference += Math.abs((newFriendScores) - (friends[i].scores));
      console.log('newfriendscore:', newFriendScores);
      console.log(friends[i].scores);


      bestMatch.name = friends[i].name;
      console.log('hello', bestMatch.name) //working
      bestMatch.picture = friends[i].picture;

      bestMatch.friendDifference = totalDifference;
      console.log('difference', totalDifference); // logging NaN

      friends.push(newFriend);
      res.json(bestMatch);
      console.log(bestMatch);//not logging
    }
}
});
// clearing out array
app.post("/api/clear", function() {
	friends = [];
	console.log("Cleared: " + friends);
});
};
