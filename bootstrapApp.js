$(document).ready(function (){

	$("form").on("submit", function(event) {

		event.preventDefault();
		$("li").remove();

		var url = "http://www.omdbapi.com/?s=" + $("#movie").val();
		$.getJSON(url, function(data){
			var source = $("#movie-template").html();
			var template = Handlebars.compile(source);
			var html = template({movieData: data});

			if(data.Error) {
				$("ol").append("<li>Sorry brah, no results</li>");
			} else {
				$(".container").html(html);
			}
		});
	});
});