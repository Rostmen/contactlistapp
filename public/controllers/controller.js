// When defining a module with no module dependencies,
// the array of dependencies should be defined and empty.
var app = angular.module('contactlistApp', []);

app.controller('contactlistController', function ($scope, $http) {

	$http.get('/contactlist').success(function(response) {
		console.log("I got the data I requested");
		$scope.persons = response; 
	});

});