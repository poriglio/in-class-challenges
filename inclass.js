var myArray = [1,7,15,2]

// Map is not destructive.
// It creates an entirely new array, which you must name.

var newArray = myArray.map(function(element){
	// element is like saying myArray[i] - map is like a for loop
	console.log(element)
	return element * 4
})

console.log(myArray)
console.log(newArray)

// Map in underscore was created BEFORE map in Javascript, hence the repeat.

// _.map(list, iteratee, [context])

var underscoreArray = _.map(myArray, function(el){
	return el*4
})

console.log(underscoreArray)






// =-=-=-=-=-=-=-=-=-=-=
// IN CLASS CHALLENGE #1
// =-=-=-=-=-=-=-=-=-=-=

// _.reduce

// Start: "Read the fucking documentation"
// Goal : "R.T.F.D." (Read the fucking documentation.)

// var goodAdvice = "Read the fucking documentation"

// var adviceArray = goodAdvice.split(" ")

// console.log(adviceArray)

// // var acronym = _.reduce(adviceArray, function(element){
// // 		var acronymArray = ""
// // 		for(var x = 0; x<adviceArray.length; x++){
// // 			return acronymArray += element[x]
// // 		}
// // 	})

// var newArray = []

// var acronym = _.reduce(adviceArray, function(element){
// 	for(var x=0; x<adviceArray.length; x++){
// 		console.log(element[x])
// 		return element[x]
// 	}
// })

// console.log(acronym)

var goodAdvice = "laughing my fucking ass off"

var acronym = _.reduce(

	goodAdvice.split(" "), 

	function(acronymSoFar, element){

		return acronymSoFar += element[0].toUpperCase() + "."

	},

	""

	)

console.log(acronym)




// =-=-=-=-=-=-=-=-=-=-=
// IN CLASS CHALLENGE #2
// =-=-=-=-=-=-=-=-=-=-=

_.find

var snacks = [
	{
		name: "Doritos",
		flavor : "cooler Ranch"
	},
		{
		name: "gummi worms",
		flavor : "strawberry"
	},
		{
		name: "Lays",
		flavor : "sriracha"
	},
		{
		name: "chocolate",
		flavor : "raspberry"
	},
		{
		name: "marzipan",
		flavor : "strawberry"
	},
		{
		name: "gummi bears",
		flavor : "strawberry"
	},
]

// GOAL: find the first snack that is strawberry flavored

var flavor = _.find(snacks,function(object){
	return object.flavor === "raspberry"
});

console.log(flavor)





// THIS WILL CONSOLE LOG ALL OF THE DIFFERENT NAMES OF SNACKS
console.log(_.pluck(snacks,"name"))


// THIS WILL CONSOLE LOG ONLY UNIQUE VALUES
// JUST PLUG IN THE PLUCK FROM ABOVE, SINCE PLUCK RETURNS AN ARRAY
console.log(_.uniq(_.pluck(snacks,"flavor")))

// UNDERSCORE CHAINING IS AWESOME!
// YOU CAN CHAIN METHODS AS LONG AS EACH METHOD RETURNS THE SAME THING
// I.E. AN ARRAY, A STRING, ETC
// ORDER MATTERS!!!

var chainResult = _.chain(snacks)
	.pluck("flavor")
	.uniq()
	.value()

console.log(chainResult)

// CHAINS MUST END WITH VALUE... IT'S A CHAIN/VALUE SANDWICH!



// =-=-=-=-=-=-=-=-=-=-=
// IN CLASS CHALLENGE #3
// =-=-=-=-=-=-=-=-=-=-=

// GOAL: RETURN A LIST OF ALL THE UNIQUE FLAVORS

var snacks = [
	{
		name    : "Doritos",
		flavors : ["cooler Ranch","sriracha","nacho cheese"]
	},
		{
		name    : "gummi worms",
		flavors : ["strawberry","sour","12 flavors"]
	},
		{
		name    : "Lays",
		flavors : ["sriracha","nacho cheese"]
	},
		{
		name    : "chocolate",
		flavors : ["raspberry","almond","strawberry"]
	},
		{
		name    : "marzipan",
		flavors : ["strawberry","almond"]
	},
		{
		name    : "gummi bears",
		flavors : ["strawberry","12 flavors"]
	},
]

var chainResult = _.chain(snacks)
	.pluck("flavors")
	.flatten()
	.uniq()
	.value()

console.log(chainResult)
