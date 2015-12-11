var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res) {
	console.log("I recieve GET request");

	person1 = {
		'name': 'Rostyslav',
		'email': 'kobizsky@gmail.com',
		'phone': '93 254-3392'
	};

	var persons = [person1];
	res.json(persons);
});

app.listen(3000);
console.log("Server running on port 3000");