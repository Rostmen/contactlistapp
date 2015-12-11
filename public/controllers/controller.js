// When defining a module with no module dependencies,
// the array of dependencies should be defined and empty.
var app = angular.module('contactlistApp', []);

app.controller('contactlistController', function ($scope, $http) {

	var refresh = function() {
		$http.get('/contactlist').success(function(response) {
			console.log("I got the data I requested");
			$scope.persons = response;
			$scope.person = ""; 
		});
	}

	refresh();

	$scope.addPerson = function() {
		console.log($scope.person);
		$http.post('/contactlist', $scope.person).success(function(response) {
			console.log(response);
			refresh();
		});
	};

	$scope.deletePerson = function(id) {
		console.log(id);
		$http.delete('/contactlist/' + id).success(function(response) {
			refresh();
		});
	};

	$scope.editPerson = function(id) {
		console.log(id);
		$http.get('/contactlist/' + id).success(function(response) {
			$scope.person = response;
		});
	};

	$scope.updatePerson = function() {
		console.log($scope.person._id);
		$http.put('/contactlist/' + $scope.person._id, $scope.person).success(function(response) {
			refresh();
		});
	}
});