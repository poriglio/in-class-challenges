angular.module("animateMod",["ngAnimate"]);

angular.module("animateMod").controller("animateCon",["$scope",function($scope){

	console.log("it works")

	$scope.dogs = [
	{
		type: "golden retriever",
	},
		{
		type: "pug",
	},
		{
		type: "mutt",
	},
		{
		type: "pomeranian",
	},
		{
		type: "labradoodle",
	},
		{
		type: "puppy",
	}]

	$scope.vanish = function($index){
		console.log($index)
		$scope.dogs[$index].doggone = true;
	}

}])