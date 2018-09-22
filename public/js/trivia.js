// LAYOUT PAGE: Buttons to navigate to EASY games 1, 2, 3
var triviaBtnGame1 = $("#btn-trivia-game1");
var triviaBtnGame2 = $("#btn-trivia-game2");
var triviaBtnGame3 = $("#btn-trivia-game3");

// TRIVIA GAME PAGE: Set variable for the page elements (sections). These ID's belong to div tags, and will allow us to 
// show() or hide() sections on the "click" of a button.
var trivia1 = $("#trivia1");
var trivia2 = $("#trivia2");
var trivia3 = $("#trivia3");
var counter = 0;

$(document).ready(function () {
    mediumBtnGame1.on("click", function () {
        trivia1.show();
        trivia2.hide();
        trivia3.hide();
    });

    mediumBtnGame2.on("click", function () {
        trivia1.hide();
        trivia2.show();
        trivia3.hide();
    });

    mediumBtnGame3.on("click", function () {
        trivia1.hide();
        trivia2.hide();
        trivia3.show();
    });
});