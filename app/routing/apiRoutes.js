var friends = require('../data/friends');
module.exports = function (app) {
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  // app.get('/api/survey', function (req, res) {
    // res.json(friends);
  // });

  app.post('/api/friends', function (req, res) {
    // friends.push(req.body);
    // res.json(true);

    var newFriend = req.body;
    var newFriendScores = newFriend.scores;

    // var totalDifference = [];
    var bestMatchName = '';
    var bestMatchPic = '';
    var totalDifference = 50;

    for (var i = 0; i < friends.length; i++) {
      // totalDifference.push(0);
      var diff = 0;
      for (var j = 0; j < newFriendScores.length; j++) {
        // totalDifference[i] += Math.abs(Number(newFriendScores[j]) - Number(friends[i].scores[j]));
        diff += Math.abs(friends[i].scores[j] - newFriendScores[j]);
      }
      if (diff < totalDifference) {
        totalDifference = diff;
        bestMatchName = friends[i].name;
        bestMatchPic = friends[i].photo;
      }
      friends.push(newFriend);
      res.json({status: 'OK', bestMatchName: bestMatchName, bestMatchPic: bestMatchPic});
    }
  });
// PSEUDOCODE
// if minValue of totalDifference is equal to a friend's total difference, that friend is the best match
// function findBestMatch() {
//   if (minValue === totalDifference[i])//not working
//     console.log(friends[i].name)
//   }
// }
// findBestMatch();
// Let bestMatch.name = the name of the friend with the minimum totalDifference value:
// var bestMatch = {
//   name: '',
//   picture: '',
//   totalDifference: ''
// };
// push that value to the header section of the modal:
// ('#resultsModal').prepend(bestMatch.name)
// (code must still work for new friends with lower totalDifference)
    // friends.push(newFriend);
    // res.json(bestMatch);
  // });

  app.post('/api/clear', function () {
    friends = [];
    console.log('Cleared: ' + friends);
  });
};
