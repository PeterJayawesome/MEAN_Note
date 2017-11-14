var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
	note: String
},{timestamps: true})
mongoose.model('Note',NoteSchema);