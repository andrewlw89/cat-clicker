// Defines a cat which has properties for name, number, div tag, child image tag, and a child counter tag
var Cat = function(cat_num) {
	this.name = 'cat_div'+cat_num;
	this.cat_number = cat_num;
	this.cat_div = '<div class="cat_box" id="cat_div' + this.cat_number + '"></div>';
	this.image = '<img id="kitten' + this.cat_number + '" src="https://placekitten.com/g/200/300" alt="A photo of a cat">';
	this.counter = '<h3>You have clicked on the cat <span id="x' + this.cat_number + '">0</span> times!</h3>';
};

// Run on page load. Responsible for generating the first Cat object and appending it to the page
var init = function() {
	generateCats(0, 1);
	paintCats(0,1);
};

// Function responsible for creating Cat objects and appending them to the cat_objects array
var generateCats = function(cats_have, cats_selected) {
	for (cats_have ; cats_have < cats_selected ; cats_have++) {
    	var cat = new Cat(cat_objects.length);
    	cat_objects.push(cat);
	}
};

// Function that removes cat_divs from the cat container
var removeCats = function(cats_have, cats_selected) {
	console.log(cats_have);
	for (cats_have ; cats_have > cats_selected ; cats_have--) {
		$('#cat_div'+(cats_have - 1)).remove();
		cat_objects.pop();
	}
};

// Function that does the appending to the page of the cats
var paintCats = function(cats_have, cats_selected) {
	for (cats_have ; cats_have < cats_selected ; cats_have++) {
		$('.cats-container').append(cat_objects[cats_have].cat_div);
		$('#cat_div'+cats_have).append(cat_objects[cats_have].image);
		$('#cat_div'+cats_have).append(cat_objects[cats_have].counter);
	}
};

// Click event that increments the counter
$('.cats-container').click(function(e) {
	  	//the element has been clicked... do stuff here
	   	var id = e.target.id;
	  	var counter = $('#' + id).next().children().html();
	  	counter++;
	  	$('#' + id).next().children().html(counter);
});

// For-loop that powers the drop down selection menu
$( "select" ).change(function () {
	$( "select option:selected" ).each(function() {
		var cats_selected = Number($("select option:selected").text());
		var cats_have = cat_objects.length;
		if (cats_have < cats_selected) {
			generateCats(cats_have, cats_selected);
			paintCats(cats_have, cats_selected);		
		} else {
			removeCats(cats_have, cats_selected);
		}
	});
});

var cat_objects = [];


document.addEventListener("load", init());