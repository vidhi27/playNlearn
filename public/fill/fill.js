// LAYOUT PAGE: Buttons to navigate to FILL IN THE BLANKS games 1, 2, 3
var fillBtnGame1 = $("#btn-fill-game1");
var fillBtnGame2 = $("#btn-fill-game2");
var fillBtnGame3 = $("#btn-fill-game3");

// FILL GAME PAGE: Set variable for the page elements (sections). These ID's belong to div tags, and will allow us to 
// show() or hide() sections on the "click" of a button.
var fill1 = $("#fill1");
var fill2 = $("#fill2");
var fill3 = $("#fill3");
var counter = 0;

$(document).ready(function () {
    fillBtnGame1.on("click", function () {
        fill1.show();
        fill2.hide();
        fill3.hide();
    });

    fillBtnGame2.on("click", function () {
        fill1.hide();
        fill2.show();
        fill3.hide();
    });

    fillBtnGame3.on("click", function () {
        fill1.hide();
        fill2.hide();
        fill3.show();
    });
});
var htmlEasyQuestionArray = [
    {
        question: "HTML stands for: Hyper Text Markup ________",
        answer: "language"
    } , {
        question: "The ____ is the main section of the HTML code",
        answer: "body"
    } , {
        question: "The <img > tag holds an _____",
        answer: "image"
    } , {
        question: "A div at the bottom of the page is called a ______",
        answer: "footer"
    } , {
        question: "Words inside < b >< /b > tags  will be ____",
        answer: "bold"
    }
]

var htmlMedQuestionArray = [
    {
        question: "The <ol> tag will creat an _______ list",
        answer: "ordered"
    } , {
        question: "The ___ tag will dsiplay text if an image can't be loaded",
        answer: "alt"
    } , {
        question: "The metadata is stored in the < ____ > tag",
        answer: "head"
    } , {
        question : "Javascript is linked in the HTML in a ______ tag",
        answer: "script"
    } , {
        question: "A ___ is a mistake in the code",
        answer: "bug"
    }

]

var htmlHardQuestionArray = [
    {
        question:"A 404 _____ occurs when a webpage can not be found",
        answer: "error"
    } , {
        question: "HTML displays in a web _______",
        answer: "browser"
    } , {
        question: "An ______ tag is used to create a link in HTML",
        answer: "anchor"
    } , {
        question: "The head of a table is stored in a _____ element",
        answer: "thead"
    } , {
        question: "An HTML ______ is used to display a webpage within a webpage",
        answer: "iframe"
    }
]

var currentQuestion = 0;
var answer;
var quizLength = htmlEasyQuestionArray.length
var guessed = false;

function fillInTheBlanks(){
$("#gameArea").empty();
$("#gameArea").append('<p> Fill in the Blanks! </p>')
$("#gameArea").append('<p> Type in your answer and press Enter</p>');
$("#gameArea").append('<p id="questionBox"></p>');
$("#gameArea").append('<div class="input-field"><input type="text" id="inputBox"></div>'); 
$("#gameArea").append('<div id="feedback"></div>');
$("#gameArea").append('<div id="gifDiv"></p>');
}

function updateQuestion(){
$('#questionBox').empty();
$('#questionBox').append(htmlEasyQuestionArray[currentQuestion].question);
$('#inputBox').val('');
answer = htmlEasyQuestionArray[currentQuestion].answer;
}

function checkProgess(){
currentQuestion ++;
if (currentQuestion < quizLength){
    updateQuestion();
} else {
    gameOver();
}
};

function checkAnswer(){
let guess = document.getElementById("inputBox").value.toLowerCase().trim();
guessed = true;
if (guess !== answer){
    $("#feedback").append('<p> Incorrect. The correct answer is: ' + answer + '</p>');
} else {
    $("#feedback").append('<p> Correct! Good Job</p>');
}
$("#feedback").append('<button id="next" class="button"> NEXT </button>')
};

function gameOver(){
$("#gameArea").empty();
$("#gameArea").append('<h3> Congratulations! You have completed Fill in the Blanks! </h3>');
$("#gameArea").append('<p> Click the Button to mave on to the next game </p>');
$("#gameArea").append('<a><button id="newGame" class="button"> Next Game </button></a>  ')
}

$(document).on("click", "#next", function(){
checkProgess();
$("#feedback").empty();
guessed = false;
})

$(document).on("keyup",function(e){
e.preventDefault();
if(e.which==13 && guessed === false){
    checkAnswer()
} else if(e.which==13 && guessed === true){
    document.getElementById("next").click();
}
});

fillInTheBlanks();
updateQuestion();
