var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var User = require('./models/user');
var Admin = require('./models/admin');
var Flight = require('./models/flight');

var path = require('path');

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/public/'));

// api calls
app.post('/api/register/', function(req, res){
	console.log('hi from server');
	console.log(req.body);
	//saving angularjs form data to db
	var myData = new User(req.body);

	myData.save()
	.then(item => {
		res.send('item saved to database');
	})
	.catch(err => {
	console.log(err);
		res.status(400).send('unable to save to the database');
	});

});

app.post('/api/login/', function(req, res){
	console.log('entering in login')
	// matching userId and password from db
	if(req.method == 'POST'){
		User
		.findOne({userId: req.body.userId})
		.exec( (err, user) => {
			if(!user){
				return res.status(400).send({"message": "No User!"});
			}
			else{
				console.log(user, req.body);
				if(user.password === req.body.password){
					return res.status(200).send({"message": "User is Valid!"});
				}
				else{
					res.status(402).send({"message": "Invalid Credentials!"});
				}
			}
		});
	}
});

app.post('/api/admin/', function(req, res){
	Admin
	.findOne({adminId: req.body.adminId})
	.exec( (err, admin) => {
		if(!admin){
			return res.status(400).send({"message": "Not an admin!"});
		}
		else{
			if(admin.password === req.body.password){
				return res.status(200).send({"message": "Admin is Valid!"});
			}
			else{
				return res.status(402).send({"message": "Invalid Admin Credentilas!"})
			}
		}
	});
});

app.post('/api/addFlight/', function(req, res){
	var myFlight = new Flight(req.body);

	myFlight.save()
	.then( item => {
		res.send('Successfully Saved to database!');
	})
	.catch( err => {
		res.status(400).send('Unable to save to database!');
	});
});

app.post('/api/search/', function(req, res){
	Flight
	.find({from: req.body.from,
			to: req.body.to})
	.exec( (err, flight) => {
		console.log(flight);
		if (flight == "") {
			return res.status(400).send({"message": "Flight Not Available!"});
		}
		else{
			return res.status(200).send({"flight": flight});
			}
			
	});
});

app.listen(3000, function(){
	console.log('server listening at port http://localhost:3000');
});