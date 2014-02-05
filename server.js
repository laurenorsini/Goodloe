var http = require('http');
var express = require('express');
var url = require('url');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var app = express();
//var db = mongoose.connect('mongodb://localhost/goodloedb');
//var db = mongoose.connect('mongodb://localhost/mydb');
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());
app.use(app.router);

var connection = mongoose.createConnection('mongodb://localhost/goodloedb');
connection.once('open', function ()
{
	console.log('opened database');
});

var PlayerSchema = new Schema({
		name: String,
		games: Number,
		active: Boolean
	});
	
var testSchema = new Schema({
	x: Number
});

app.get('/query', function(req, res)
{
	
	PlayerModel = connection.model('PlayerModel', PlayerSchema, 'Players');
	//PlayerModel.findOne({active: true}, function (err, player)
	//testModel = connection.model('testModel', testSchema, 'testData');
	PlayerModel.find({}, function(err, player)
	{
		if (err)
		{
			console.log("Error " + err);
		}
		console.log(player);
	});
	
	//console.log(Objs);
	
	//mongoose.connection.close();
	
	res.send("Done getting stuff from mongo.");
	//res.send(Objs);
	//res.send({name: "Patrick", count: 15});
});

app.listen('1337');
console.log('Listening on port 1337');