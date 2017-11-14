var notes = require('../controllers/notes.js');
var path = require('path');

module.exports = function(app){
	app.get('/notes', (req,res,next)=>{notes.index(req,res)})
	app.post('/notes', (req,res,next)=>{notes.create(req,res)})

	app.all("*",function(req,res){
		res.sendFile('index.html', { root: './client/dist' });
	})
}