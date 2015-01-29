$(document).ready(function (){														//wait til the doc is loaded to run JavaScript

	$("form").on("submit", function(event) {										//listen for a submit event
		event.preventDefault();														//keep page from default reloading
		$("li").remove();															//clear previous entries
		var movie = $("#movie").val();												//grab #movie id in a variable
		$.getJSON("http://www.omdbapi.com/?s=" + movie, function(data){				//getJSON and create the full URL
			if (data.Error) {														//if there are no results:
				$("ol").append("<li>Sorry brah, no results</li>");						//throw an error message
			} else {
				for (var value in data.Search){										//otherwise, if there are results
					$("ol").append("<li>" + (data.Search[value].Title) + "</li>");		//append the title into the <li>st
				}
			}
		});
	});

});