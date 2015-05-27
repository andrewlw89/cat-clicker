var Cat = function(cat_num) {
	this.name = 'cat_div'+cat_num;
	this.cat_number = cat_num;
	this.cat_div = '<div id="cat_div' + this.cat_number + '"></div>';
	this.image = '<img id="kitten' + this.cat_number + '" src="https://placekitten.com/g/200/300" alt="A photo of a cat">';
	this.counter = '<h3>You have clicked on the cat <span id="x' + this.cat_number + '">0</span> times!</h3>';
};

// Function that takes in the element that is clicked on and increments it's counter
$('.cats-container').click(function(e) {
	  	//the element has been clicked... do stuff here
	   	var id = e.target.id;
	  	var counter = $('#' + id).next().children().html();
	  	counter++;
	  	$('#' + id).next().children().html(counter);
});

// For-loop for generating the required amount of cats to display on the page
$( "select" ).change(function () {
	$( "select option:selected" ).each(function() {
		//$(".cats-container").empty();
		var cats_selected = Number($("select option:selected").text());
		var cats_have = cat_objects.length;
		if (cats_have < cats_selected) {
			//console.log(cats_total);
			generateCats(cats_have, cats_selected);
			paintCats(cats_have, cats_selected);		
		} else {
			
		}
	});
});


var init = function() {
	generateCats(0, 1);
	paintCats(0,1);
};


var generateCats = function(cats_have, cats_total) {
	for (var cats_have ; cats_have < cats_total ; cats_have++) {
		//console.log(cats_have, cats_total);
    	cat_num = cat_objects.length;
    	var cat = new Cat(cat_num);
    	cat_objects.push(cat);
    	//console.log(cat_objects);
	}
};

var paintCats = function(cats_have, cats_selected) {
	for (cats_have ; cats_have < cats_selected ; cats_have++) {
		console.log(cats_have, cats_selected);
		$('.cats-container').append(cat_objects[cats_have].cat_div);
	}
}

var cat_objects = [];


document.addEventListener("load", init());