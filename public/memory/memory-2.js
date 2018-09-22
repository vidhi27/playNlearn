// LAYOUT PAGE: Buttons to navigate to MEMORY games 1, 2, 3
var memoryBtnGame1 = $("#btn-memory-game1");
var memoryBtnGame2 = $("#btn-memory-game2");
var memoryBtnGame3 = $("#btn-memory-game3");

// MEMORY GAME PAGE: Set variable for the page elements (sections). These ID's belong to div tags, and will allow us to 
// show() or hide() sections on the "click" of a button.
var memory1 = $("#memory1");
var memory2 = $("#memory2");
var memory3 = $("#memory3");
var counter = 0;

$(document).ready(function () {
    memoryBtnGame1.on("click", function () {
        memory1.show();
        memory2.hide();
        memory3.hide();
    });

    memoryBtnGame2.on("click", function () {
        memory1.hide();
        memory2.show();
        memory3.hide();
    });

    memoryBtnGame3.on("click", function () {
        memory1.hide();
        memory2.hide();
        memory3.show();
    });

// MEMORY GAME FUNCTIONALITY 
//variables
var noOfBoxGame = 30;
var boxIndexes = [];
var noOfClick = 0;
var clickCounter = 0;
var correctGuess = 0;
var clickImages = [];
var timeOutRestore = 1000;

//page load
$(function(){
	//render the game
	HTMLGame.renderGameLayout();
	
	$("#btnRestart").on("click", function(){
		HTMLGame.renderGameLayout();
	});
});

//game class
HTMLGame = {
	
	//This will load the default game array and perform a shiffle
	initData: function(){
		for(var x=0;x<=1;x++){for(var i=0; i<= (noOfBoxGame/2)-1;i++){boxIndexes.push(i);}}
		this.shuffleArray(boxIndexes);
	},
	
	//function to shuffle array
	shuffleArray: function(array){
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	},
	

	buildGameBox: function(){
		var boxes = "";
		var boxCover = "";
		
		//load the images and image cover
		for(var i = 1; i <= noOfBoxGame; i++){
			boxes += "<div id='box-" + i + "' class='box-picture'><img src='images/" + (parseInt(boxIndexes[i-1]) + 1) + ".png'/></div>";
			boxCover += "<div id='box-cover-" + i + "' class='box-cover' data-id='" + (parseInt(boxIndexes[i-1]) + 1) + "'></div>";
		}
		boxCover = "<div class='box-cover-wrapper'>" + boxCover + "</div>";
		$("#game-content").html(boxes + boxCover);
		$(".box-picture").show();
		//add event to click the box cover image
		$(".box-cover").off("click");
		$(".box-cover").on("click", function(){
			if(noOfClick <= 1){
				clickCounter++;
				$("#no-of-clicks").html(clickCounter);
				
				noOfClick++;
				$(this).addClass('animated flipOutX'); 
				
				var clickCover = {
					ImageID: $(this).attr("data-id"),
					CoverID: $(this).attr("id").replace("box-cover-","")
				}
				clickImages.push(clickCover);
				
				if(noOfClick >= 2){
					//check if the revealed images are correct
					if(clickImages[0].ImageID == clickImages[1].ImageID){
						correctGuess++;
						$("#correct-guess").html(correctGuess);
						
						//reset the variables
						noOfClick = 0;
						clickImages = [];
						
						//if the game is completed then perform a reset
						if(correctGuess >= (noOfBoxGame/2)){
							$("#canvas-game, #game-statistic").fadeOut(1000); 
							$("#game-message").addClass('animated bounceInDown').css('animation-delay', '1s').show(); 
							correctGuess = 0;
							$("#correct-guess").html(correctGuess);
							clickCounter = 0;
							$("#no-of-clicks").html(clickCounter);
						}
					}else{
						//if not the same then close the image cover again.
						setTimeout(function(){
							clickImages.forEach(function(item, index){
								$("#box-cover-" + item.CoverID).removeClass("flipOutX").addClass('animated flipInX'); 
							});
							//reset
							noOfClick = 0;
							clickImages = [];
						}, timeOutRestore);
					}
					
					
				}
			}
		});
	},
	
	//function to call main functions to render the game
	renderGameLayout: function(){
		$("#game-message").hide();
		$("#canvas-game, #game-statistic").show();
		this.initData();
		this.buildGameBox();
	}
}
});