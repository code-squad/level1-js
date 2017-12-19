var outer = function() {

	var i = 10;
	var d = 20;

	(function(x) {
		console.log(i);
		console.log(x);
	})(d);

};

outer();
