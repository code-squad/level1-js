var num = document.getElementById('num');
var btns = document.getElementsByTagName("button");

var stack = [];

stack.peek = function() {
	return this[this.length - 1];
};

stack.empty = function() {
	this.length = 0;
};

var display = function() {
	if (stack.length === 0) {
		num.innerHTML = 0;
	} else {
		num.innerHTML = stack.join("");
	}
};

var isOp = function(token) {
	return (token === "/" || token === "*" || token === "+" || token === "-" )
};

var reduceOp = function(token) {
	var last = stack.peek();
	if (isOp(last) && isOp(token)) {
		stack.pop();
	}
};

for (var i = 0; i < btns.length; i++) {
	if (btns[i].innerHTML === 'bs' || btns[i].innerHTML === 'c' ||
			btns[i].innerHTML === '+-' || btns[i].innerHTML === '=') {
		continue;
	}

	btns[i].onclick = function() {
		var token = this.innerHTML; 
		reduceOp(token);
		stack.push(token);
		display();  
	}
}

$(document).ready(function(){
	$("#bc").click(function(){
		stack.length = 0;
		display();
	});

	$("#bs").click(function(){        
		stack.pop();
		display();
	});

	$("#bpm").click(function(){
		var last = stack.peek();
		if (last === '+' ) {
			stack.pop();
			stack.push('-');
		} else if (last === '-') {
			stack.pop();          
			stack.push('+');                   
		} else {
			stack.push('-');                   
		}
		display();       
	});

	$('#be').click(function() {
		try {
			var result = "" + eval(stack.join(""));
		} catch(err)  {
			result = "ERR";
		}
		stack.empty();
		for (var i = 0; i < result.length; i++) {
			stack.push(result[i]);  
		}    
		display();    
	});  
});
