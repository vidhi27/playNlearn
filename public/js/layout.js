// LAYOUT PAGE: Set variable for the page elements (sections). These ID's belong to div tags, and will allow us to 
// show() or hide() sections on the "click" of a button.
var language = $("#language");
var level = $("#level");
var gameContainer = $("#game-container");
var games1 = $("#games-1");
var games2 = $("#games-2");
var games3 = $("#games-3");
var indexButtons = $("#indexBtns");
var signUp = $("#signUp");
var signIn = $("#signIn");

// LAYOUT PAGE: These are the buttons to navigate through the layout page.
var htmlBtn = $("#html-btn");
var signInBtn = $("#signInBtn");
var signUpBtn = $("#signUpBtn");
var cssBtn = $("#CSS-language");
var javaBtn = $("#Javascript-language");
var pytBtn = $("#Python-language");
var rubyBtn = $("#Ruby-language");
var bgnBtn = $("#Beginner-Level");
var intBtn = $("#Intermediate-Level");
var expBtn = $("#Expert-Level");

$(document).ready(function () {
  // LAYOUT PAGE: When the use selects a language, it will hide() the language div, and show() the level div.
  // Hides the Level and Game sections initially when the page loads
  level.hide();
  gameContainer.hide();

  // Setting up the lanugage buttons for on-click events
  htmlBtn.on("click", function () {
    language.hide();
    level.show();
    gameContainer.hide();
  });

  cssBtn.on("click", function () {
    language.hide();
    level.show();
    gameContainer.hide();
  });

  javaBtn.on("click", function () {
    language.hide();
    level.show();
    gameContainer.hide();
  });

  pytBtn.on("click", function () {
    language.hide();
    level.show();
    gameContainer.hide();
  });

  rubyBtn.on("click", function () {
    language.hide();
    level.show();
    gameContainer.hide();
  });

  // When beginning button is clicked, this should show games1.
  bgnBtn.on("click", function () {
    language.hide();
    level.hide();
    gameContainer.show();
    games1.show();
    games2.hide();
    games3.hide();
  });

  // When beginning button is clicked, this should show games2.
  intBtn.on("click", function () {
    language.hide();
    level.hide();
    gameContainer.show();
    games1.hide();
    games2.show();
    games3.hide();
  });

  // When beginning button is clicked, this should show games3.
  expBtn.on("click", function () {
    language.hide();
    level.hide();
    gameContainer.show();
    games1.hide();
    games2.hide();
    games3.show();
  });

  signIn.hide();
  signUp.hide();

  signInBtn.on("click", function () {
    indexButtons.hide();
    signUp.hide();
    signIn.show();
  });

  signUpBtn.on("click", function () {
    indexButtons.hide();
    signIn.hide();
    signUp.show();
  });
});