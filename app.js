$(document).ready(function (){

	$("form").on("submit", function(event) {
		event.preventDefault();
		var movie = $("#movie").val();	
		$.getJSON("http://www.omdbapi.com/?s=" + movie, function(data){
			if (data.Search.length > 0) {
				for (var value in data.Search){
					$("ol").append("<li>" + (data.Search[value].Title) + "</li>");
				}
			}
		});
	});

});