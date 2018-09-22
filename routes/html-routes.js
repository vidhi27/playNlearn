var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // User sign-in page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Level and game selection page -- Navigation page
  app.get("/layout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/layout.html"));
  });

  // Game page - Easy-level HTML content
  app.get("/game-easy-html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/game-easy.html"));
  });

  // Game page - Medium-level HTML content
  app.get("/game-medium-html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/game-medium.html"));
  });

  // Game page - Hard-level HTML content
  app.get("/game-hard-html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/game-hard.html"));
  });

  // Game page - Easy-level CSS content
  app.get("/game-easy-css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css-game-easy.html"));
  });

  app.put("/api/users", function(req, res) {
    db.User.update(req.progress/9,
      {
        where: {
          id: req.progress.id
        }
      })
  });
};
