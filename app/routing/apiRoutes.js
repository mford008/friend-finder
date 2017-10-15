var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");

module.exports = function(app) {

app.get("/api/home", function(req, res) {
// res.json(Data);
console.log("friends!");
});

app.get("/api/survey", function(req, res) {
res.json(friendData);
});