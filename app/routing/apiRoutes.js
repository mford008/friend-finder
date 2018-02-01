var friends = require('../data/friends');
module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });
  app.post('/api/friends', function (req, res) {
    friends.push(req.body);

    var currentScore = req.body.scores;
    var bestFriend = 0;
    var lowestScore = 50;

    for (var i = 0; i < (friends.length - 1); i++) {
      var compScore = friends[i].scores;
      var totalDifference = 0;

      for (var j = 0; j < currentScore.length; j++) {
        var singleDifference = Math.abs(parseInt(currentScore[j]) - parseInt(compScore[j]));
        totalDifference = totalDifference + singleDifference;
      }

      if (totalDifference < lowestScore) {
        lowestScore = totalDifference;
        bestFriend = i;
      }
    }

    res.send(friends[bestFriend]);
  });
  app.post('/api/clear', function () {
    friends = [];
    console.log('Cleared: ' + friends);
  });
};
