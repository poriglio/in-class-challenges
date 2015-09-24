// NAMESPACING

// 1. Encapsulate methods and variables
// 	Eliminates global variables
// 		- useful when more than one developer is working on a project - no one can override your global variables
// 		- Toyota brakes incident - BAD to have lots of global variables

// 		_.sort() - because the underscore variable is part of calling sort, someone can still name a variable "sort" and also use underscore's sort methods
// 		- same with jQuery using the dollar sign $


// -=-=-=-=-=-=-=-=-=-=-=-
// OUR AMAZING LIBRARY:

var helloLibrary = {
	numberHellos : 0,
	sayHi        : function(){
		console.log('hi');
	    this.numberHellos++;
	},
	yellHi       : function(){
		console.log('HI!');
		this.numberHellos++;
	}

}

// var numberHellos = 0

// var sayHi = function(){
// 	console.log('hi')
// 	numberHellos++
// }

// var yellHi = function(){
// 	console.log('HI!')
// 	numberHellos++
// }

// -=-=-=-=-=-=-=-=-=-=-=-
// MY OWN CODE:

helloLibrary.sayHi()
helloLibrary.yellHi()
console.log(helloLibrary.numberHellos)

var yellHi = function(){
	console.log("HIIIIIIII!!!!!!!")
}

yellHi()
helloLibrary.yellHi()


// -=-=-=-=-=
// -=-=-=-=-=
// // PRIVACY : takes advantage of closure to hide variables/methods
// -=-=-=-=-=
// -=-=-=-=-=

// var myFunc = function(){
// 	var something = "hello"
// 	return function(){
// 		return something
// 	}
// }

// var newFunc = myFunc()

// Since there is a reference to "something" it doesn't get garbage collected like most stuff would.

// Don't write a function called "dontCallMe! Why not make it so the user can't even see the function to begin with? 

// library
// var people = []

// var Person = function(firstName,lastName,profession){

// 	this.firstName   = firstName;
// 	this.lastName    = lastName;
// 	this.profession  = profession;
// 	people.push(this)
// }

// NOTHING INSIDE PERSONCONSTRUCTOR EXISTS UNLESS THERE IS A REFERENCE TO IT!
// THEN YOU MUST SET UP A WAY TO ACCESS IT

var PersonConstructor = function(){

	var people = []

	var Person = function(firstName,lastName,profession){

		this.firstName   = firstName;
		this.lastName    = lastName;
		this.profession  = profession;
		people.push(this)
	}
	Person.listPeople = function(){
		return people
	}

	// createInfo is a PRIVATE method, and there is no way to run it/access it outside of this function

	var createInfo = function(person){
		return person.firstName + " is a very talented " + person.profession + "."
	}

	Person.prototype.whoDat = function(){
		return createInfo(this)
		// this would refer to hansel or whatever host object the method is being called on
	}
	return Person
}

// REVEALING MODULE PATTERN
// Do what you want in the function.
// Only return the info you want to share.

// library end



// own code begin
var makeAPerson = PersonConstructor()

var hansel = new makeAPerson ('Hansel','[]','Professional Turtle Rider')
var gretel = new makeAPerson ('Gretel','{}','Crumb Droppah')

// own code end




// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// IMMEDIATELY INVOKED FUNCTION EXPRESSION
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Define and call a function in a single step! :-0
// This lowers our global namespace footprint even more

var multiplier = function (number) {
	return number * 2
}

// 1. Wrap entire function in parentheses.
// 2. Immediately add the parenthese to call the function.

var multiplier = (function (number) {
	console.log(number*4)
})(2)