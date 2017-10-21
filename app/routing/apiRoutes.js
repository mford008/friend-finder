var friends = require('../data/friends');
module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  app.get('/api/home', function (req, res) {
    console.log('friends!');
  });

  app.get('/api/survey', function (req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function (req, res) {
    friends.push(req.body);
    res.json(true);

    var newFriend = req.body;
    var newFriendScores = newFriend.scores;

    var totalDifference = [];

    for (var i = 0; i < friends.length; i++) {
      totalDifference.push(0);

      for (var j = 0; j < friends[i].scores.length; j++) {
        totalDifference[i] += Math.abs(Number(newFriendScores[j]) - Number(friends[i].scores[j]));
      }
      // Math.min('minimum line 30', totalDifference);
    }
    console.log('line 31', totalDifference);
    // Math.min('minimum', totalDifference);
    var minValue = Math.min.apply(null, totalDifference.filter(Boolean));
    console.log('line 35 min', minValue);

    if (minValue === friends.scores) {
      console.log(friends[i].name);
    }


    // var bestMatch = {
    //   name: '',
    //   picture: '',
    //   totalDifference: ''
    // };
// PSEUDOCODE
// grab minimum value from totalDifferences array, along with associated friend object values.
// Let bestMatch.name = the name of the friend with the minimum totalDifference value.
// push that value to the header section of the modal.
// create code that still works if a new friend is added to the array of friend objects and has a lower totalDifference value,
// also code can't pick up the new user's entry as the bestMatch

    // if (totalDifference[i] <= bestMatch.friendDifference) {
      // bestMatch.name = friends[i].name;
    // }
    friends.push(newFriend);
    // res.json(bestMatch);
  });

  app.post('/api/clear', function () {
    friends = [];
    console.log('Cleared: ' + friends);
  });
};
