var path = require('path');

module.exports = function (app) {
  app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
  });

  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/survey.html'));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/index.html'));
  });
};