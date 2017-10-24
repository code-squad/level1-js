function Human(name, hp, mp, money, item) {
	this.name = name;
	this.hp = hp;
	this.mp = mp;
	this.money = money; 
	this.item = [];
	this.item.push(item);
}

Human.prototype.eat = function(food) {
	this.hp += food.energy;
};

var h = new Human('Jina', 100, 20, 990, 'Pen');
h.item.push('sword');

var chicken = {energy: 30};

h.eat(chicken);

var keys = Object.keys(h);
for (var i = 0; i < keys.length; i++) {
	var key = keys[i];
	console.log(key + ": " + h[key]);
}
