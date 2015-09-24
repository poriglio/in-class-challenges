var Car = function (make,model,year,manual){
	this.make = make
	this.model = model
	this.year = Math.floor(Math.random()*40+1980)
	this.manual = manual
	this.features = ["spinners","trash can","phone charger","mix CD"]
}

var lennon = new Car ( "Honda", "Civic", 2005, true )

var ronda = new Car ("Honda", "Accord", 1992, false )

Car.prototype.crash = function(victim){
	this.features.push(victim.features.pop())
	console.log(this.model + " now has " + this.features.join(", " + "."))
	console.log(victim.model + " now has " + victim.features.join(", " + "."))
}

var carLot = []

for ( var i = 0; i < 20; i++ ) {
	carLot.push(new Car('Honda','Element',2005,true))
}

for ( var i = 0; i < 10; i++) {
	carLot.push(new Car('Toyota','Prius',2015,false))
}

var demolitionDerby = function (hitter,hittee) {
	
}