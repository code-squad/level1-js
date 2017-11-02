var outer = function() {

	var i = 10;

	var inner = function() {
		console.log(i);
	};

	i = 11;
	inner();
};

outer();
