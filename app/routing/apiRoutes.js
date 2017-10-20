var friends = require("../data/friends");


function newFriendFormatting(req) {
  return (newFriend = {
    name: req.body.name,
    picture: req.body.picture,
    scores: [
      Number(req.body.question_one),
      Number(req.body.question_two),
      Number(req.body.question_three),
      Number(req.body.question_four),
      Number(req.body.question_five),
      Number(req.body.question_six),
      Number(req.body.question_seven),
      Number(req.body.question_eight),
      Number(req.body.question_nine),
      Number(req.body.question_ten)
    ]
  });
}



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

var newFriend = req.body;
// var newFriendName = newFriend.name;
// var newFriendPicture = newFriend.picture;
var newFriendScores = newFriend.scores;

// var totalDifference = 0;

for (var i = 0; i < friends.length; i++) {
	console.log(friends[i].name); //working
		var totalDifference = 0;

		for (var j = 0; j < friends[i].scores.length; j++) {
			totalDifference += Math.abs(Number(newFriendScores[j]) - Number(friends[i].scores[j]));
      console.log('newfriendscore:', newFriendScores); //newFriendScores is an object
      console.log(friends[i].scores);
      console.log('difference:', totalDifference);
}
console.log('is this working?', totalDifference); //yes
      bestMatch.name = friends[i].name;
      console.log('hello', bestMatch.name) //working
      bestMatch.picture = friends[i].picture;

      bestMatch.friendDifference = totalDifference;
      // console.log('difference', totalDifference); // logging NaN

      friends.push(newFriend);
      res.json(bestMatch);
      console.log(bestMatch);//not logging
    // }
}
});
// clearing out array
app.post("/api/clear", function() {
	friends = [];
	console.log("Cleared: " + friends);
});
};
