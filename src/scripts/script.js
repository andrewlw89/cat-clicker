// Function that takes in the element that is clicked on and increments it's counter
$('.cats-container').click(function(e) {
	  	//the element has been clicked... do stuff here
	   	var id = e.target.id;
	  	var counter = $('#' + id).next().children().html();
	  	counter++;
	  	$('#' + id).next().children().html(counter);
});

// For-loop for generating the required amount of cats to display on the page
var catGenerator = function() {
	$( "select" ).change(function () {
		$( "select option:selected" ).each(function() {
				$(".cats-container").empty();
				var cats_needed = $("select option:selected").text();
				for (cat_num = 0 ; cat_num < cats_needed ; cat_num++) {
					var cat_div = '<div id="cat_div' + cat_num + '"></div>';
					var image = '<img id="kitten' + cat_num + '" src="https://placekitten.com/g/200/300" alt="A photo of a cat">';
			    	var counter = '<h3>You have clicked on the cat <span id="x' + cat_num + '">0</span> times!</h3>';
			    	$('.cats-container').append(cat_div);
			    	$('#cat_div' + cat_num).append(image);
			    	$('#cat_div' + cat_num).append(counter);

				}
			});
		});
	};
	
var Cat = {
	name: name
};

document.addEventListener("load", catGenerator());