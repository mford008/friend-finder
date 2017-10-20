var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  })

  app.get("/api/home", function(req, res) {
    console.log("friends!");
  });

  app.get("/api/survey", function(req, res) {
    res.json(friends);
  })

  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);

// best friend match calculation, under testing
var bestMatch = {
	name: "",
	picture: "",
  totalDifference: ""
}

var newFriend = req.body;
// var newFriendName = newFriend.name;
// var newFriendPicture = newFriend.picture;
var newFriendScores = newFriend.scores;
var keys = ['question_one',
            'question_two',
            'question_three',
            'question_four',
            'question_five',
            'question_six',
            'question_seven',
            'question_eight',
            'question_nine',
            'question_ten',
            ];
var totalDifference = []
for (var i = 0; i < friends.length; i++) {
console.log(friends);
  console.log(friends[i].name); //working
		// var totalDifference = 0;
    totalDifference.push(0);

		for (var j = 0; j < friends[i].scores.length; j++) {
		// for (var j = 0; j < keys.length; j++) {
      // var key = keys[j]
			totalDifference[i] += Math.abs(Number(newFriendScores[j]) - Number(friends[i].scores[j]));
			// totalDifference[i] += Math.abs(Number(newFriendScores[key]) - Number(friends[key]));
			console.log(friends[i].scores);
      console.log('difference:', totalDifference);
}
}
      // bestMatch.name = friends[i].name;
      bestMatch.name = friendsArray[i].name;
      console.log('hello', bestMatch.name) //working
      bestMatch.picture = friends[i].picture;
      if (totalDifference <= bestMatch.friendDifference) {
        bestMatch.friendDifference = totalDifference;

      }

      friends.push(newFriend);
      res.json(bestMatch);
      console.log('meow', bestMatch);//not logging
    // }
// }
});

// clearing out array
app.post("/api/clear", function() {
	friends = [];
	console.log("Cleared: " + friends);
});
};
