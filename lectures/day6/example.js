var m1 = {name: "honux", hp: 100, mp: 50};
var keys = Object.keys(m1);
keys.forEach(function(key){
	  console.log("m1[%s] = %s", key, m1[key]);
});


function Human(name, hp, mp, power) {
	  this.name = name; //m1.name = name;
	  this.hp = hp;
	  this.mp = mp;
	  this.power = power;
	  Human.prototype.number++;
}


var display = function(obj) {
	  var keys = Object.keys(obj);
	  keys.forEach(function(key){
		      console.log("obj[%s] = %s", key, obj[key]);
		    });
};
