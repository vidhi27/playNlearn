function gifCall(){
    var APIKey = "&api_key=bHqkMcxYFjGLDZN4kdne5mYiOLUHWDnH";
    var limit ="&limit=1";
    var rating = "&rating=g";
    var keyword = "fireworks";
    var queryURL = "http:/" + "/api.giphy.com/v1/gifs/search?q=" + keyword + APIKey + limit + rating;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
    var results = response.data;
    for (var i=0; i < results.length; i++){
        var gifDiv = $("<div class='item'>");
        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url)
        gifDiv.append(gifImage);
        $("#gameArea").prepend(gifDiv);
        $("#game-message").prepend(gifDiv);
        $("#scoreboard").prepend(gifDiv);      
        }
    })
};
