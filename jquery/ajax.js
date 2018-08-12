$(function(){
    $("button").click(function(){
        $.ajax({ type:'GET',
                 url: "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo",
                 success:(function(result){
                    
                $("h3").html(JSON.stringify(result));
                console.log(result);
            })
        })
    })
})