// When defining a module with no module dependencies,
// the array of dependencies should be defined and empty.
var app = angular.module('contactlistApp', []);

app.controller('contactlistController', function ($scope) {
  $scope.contacts = [
    {'name': 'Nexus S',
     'email': 'Fast just got faster with Nexus S.',
     'phone': '111-111-1111'}
  ];
});