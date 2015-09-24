// "is a" relationships

// "has a" relationships

// We use inheritance in our code to WRITE LESS CODE!

var Dog = function(name,color){
	this.name  = name
	this.color = color
}

Dog.prototype.play = function(toy){
	console.log(this.name + " plays with the " + toy + ".")
}

var apollo = new Dog ('Apollo','black')
var marley =  new Dog ('Marley','brown')

apollo.play('beefalo')

// var AnthroDog = function(name,color,job){
// 	this.name = name
// 	this.color = color
// 	this.job = job
// }

// AnthroDog.prototype.play = function(toy){
// 	console.log(this.name + " plays with the " + toy + ".")
// }

// AnthroDog.prototype.work = function(job){
// 	console.log(this.name + " works as a " + job)
// }


// lacey.work("freelance artist")

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// We are repeating ourselves in the above code!
// An AnthroDog "is a" Dog
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var AnthroDog = function(name,color,job){
	// // this = {}
	// We only pass in name and color becase base class only cares about those.
	Dog.call(this,name,color)
	// You only need to specify the bits of logic that are specific to the new type of Dog
	this.job = job
	console.log(this)
	// at this point, an anthroDog doesn't have the play method
}

AnthroDog.prototype = new Dog()

var lacey = new AnthroDog("Lacey","tri-color","freelance artist")
var will = new AnthroDog("Will","bluetick","truck driver")

will.play("rawhide bone")

AnthroDog.prototype.work = function(){
	console.log(this.name + " works as a " + this.job + ".")
}

lacey.work()
will.work()
lacey.play('paints')
will.play('empty can of chew')

// Order assignment is important! Set up inheritance first, THEN specify things unique to the subclass. (Make sure all anthroDogs can play, THEN make sure they can work)

// will.constructor will only show the original dog constructor, not the anthro dog constructor, once AnthroDogs are set to regular Dogs. This needs to be overridden. To set the constructor of a subDog to the subDog constructor: 

AnthroDog.prototype.constructor = AnthroDog