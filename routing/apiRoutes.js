var friends = require('../data/friends');

module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function (req, res) {
    friends.push(req.body);

    var currentScore = req.body.scores;
    // bestFriend will have lower margin of difference
    var bestFriend = 0;
    // Ten questions options 1 - 5, 10 x 5 = 50 is the highest margin of difference
    var lowestScore = 50;

    // Iterating over the friends in data
    for (var i = 0; i < (friends.length - 1); i++) {
      // Score to compare to
      var compScore = friends[i].scores;
      var totalDifference = 0;

      // Iterating over scores for each friend in data
      for (var j = 0; j < currentScore.length; j++) {
        // Taking individual difference in survey answers - absolute value of current minus comparison score
        var singleDifference = Math.abs(parseInt(currentScore[j]) - parseInt(compScore[j]));
        // Adding to total difference
        totalDifference = totalDifference + singleDifference;
      }
      // If total difference is lower than 50, best friend is at current index
      if (totalDifference < lowestScore) {
        lowestScore = totalDifference;
        bestFriend = i;
      }
    }

    res.send(friends[bestFriend]);
  });
};
