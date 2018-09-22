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
var quizLength = htmlHardQuestionArray.length
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
$('#questionBox').append(htmlHardQuestionArray[currentQuestion].question);
$('#inputBox').val('');
answer = htmlHardQuestionArray[currentQuestion].answer;
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
$("#feedback").append('<button id="next" class="waves-effect waves-light btn"> NEXT </button>')
};

function gameOver(){
    $("#gameArea").empty();
    gifCall();
    $("#gameArea").append('<h3> Congratulations! You have completed Fill in the Blanks! </h3>');
    $("#gameArea").append('<p> Click the Button to mave on to the next game </p>');
    $("#gameArea").append('<a href="../memory/memory-3.html"><button id="newGame" class="waves-effect waves-light btn"> Next Game </button></a>  ')
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
