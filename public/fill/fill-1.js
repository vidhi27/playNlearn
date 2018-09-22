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
    $("#feedback").append('<p style="color:red"> Incorrect. The correct answer is: ' + answer + '</p>');
} else {
    $("#feedback").append('<p style="color:green"> Correct! Good Job</p>');
}
$("#feedback").append('<button id="next" class="waves-effect waves-light btn"" style="margin:auto"> NEXT </button>')
};

function gameOver(){
$("#gameArea").empty();
gifCall();
$("#gameArea").append('<h3> Congratulations! You have completed Fill in the Blanks! </h3>');
$("#gameArea").append('<p> Click the Button to mave on to the next game </p>');
$("#gameArea").append('<a href="../memory/memory-1.html"><button id="newGame" class="waves-effect waves-light btn"> Next Game </button></a>  ')
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
