var mongoose = require('mongoose');
var Note = mongoose.model("Note");

module.exports = {
	index: function(req,res){
		Note.find({}).sort('-createdAt').exec(function(err,notes){
			if(err){
				console.log(err);
			}
			console.log
			res.json(notes);
		})
	},
	create: function(req,res){
		console.log(req.body);
		var note = new Note({note: req.body.note});
		note.save(function(err){
			if(err){
				console.log(err);
			}
			res.redirect('/notes');
		})
	}
}