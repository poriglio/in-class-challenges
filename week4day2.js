// -=-=-=-=-=-=-=-
// DOG CONSTRUCTOR
// -=-=-=-=-=-=-=-

// var Dog = function(name,breed,color,job,superhero){
// 	// var this = {}
// 	this.name = name;
// 	this.breed = breed;
// 	this.color = color;
// 	this.job = job;
// 	this.superhero = superhero;
// 	this.speak = function(){
// 		return this.name + " says woof!"
// 	}

// 	// under the hood:
// 	// function returns undefined if it has no return statement

// 	// Using the "new" keyword, it will return this

// }

// var myArray = [1,2,3]
// myArray.join() - in this case, "this" is "myArray"

// var lacey = new Dog("Lacey","rough collie","tri-color","painter",false)
// var will = new Dog("Will","coonhound","bluetick","truck driver",false)
// var mo = new Dog("Mo","Jack Russell","white and brown","government agent",true)

// console.log(lacey.speak())
// console.log(will.speak())
// console.log(mo.speak())

// console.log(mo)

// -=-=-=-=-=-=-=-=-=-=
// IN CLASS CHALLENGE 1
// -=-=-=-=-=-=-=-=-=-=

// Create a Quote class and constructor function.

// 2 properties: 
// Text
// Author

// you don't feel high; you just ARE
// it went from being fun to being an ordeal

// Create an instance of the quote and store it in a variable

// console log the value of the instance
// BONUS: have default values if text/author are not passed in

// var Quote = function ( text, author ) {
// 	this.author = author || "unknown";
// 	this.text = text || "the sound of silence";
// };

// var funny1 = new Quote ("You don't FEEL high; you just ARE","Paula")
// var funny2 = new Quote ("It went from being fun to being an ordeal","Amir")
// var funny3 = new Quote ()

// console.log(funny1);
// console.log(funny2);
// console.log(funny3);

// -=-=-=-=--=-=-=-==-
// END CLASS CHALLENGE
// -=-=-=-=-=-=-=-=--=

var Dog = function(name,breed,color,job,superhero){
	// var this = {}
	this.name = name;
	this.breed = breed;
	this.color = color;
	this.job = job;
	this.superhero = superhero;
	// this.speak = function(){
	// 	return this.name + " says pant pant!"
	// }

}

var lacey = new Dog("Lacey","rough collie","tri-color","painter",false)
var will = new Dog("Will","coonhound","bluetick","truck driver",false)
var mo = new Dog("Mo","Jack Russell","white and brown","government agent",true)

// console.log(lacey.speak())
// console.log(will.speak())
// console.log(mo.speak())

// console.log(mo)

// USE PROTOTYPE to take up less memory

Dog.prototype.speak = function (){
	return this.name + " says woof!"
}

// ORDER DOESNT MATTER WITH PROTOTYPE



// -=-=-=-=-=-=-=-=-=-=
// IN CLASS CHALLENGE 2
// -=-=-=-=-=-=-=-=-=-=

// UPDATE QUOTE CLASS to have two methods on its prototype.
// 1. method to count the words in the quote
// 2. method to console log an uppercased version of the quote with exclamation points

var Quote = function ( text, author ) {
	this.author = author || "unknown";
	this.text = text || "the sound of silence";
};

var funny1 = new Quote ("You don't FEEL high; you just ARE","Paula")
var funny2 = new Quote ("It went from being fun to being an ordeal","Amir")
var funny3 = new Quote ()

console.log(funny1);
console.log(funny2);
console.log(funny3);

Quote.prototype.wordCount = function () {
	return this.text.split(" ").length;
}

Quote.prototype.yellIt = function () {
	return this.text.toUpperCase() + "!!!";
}