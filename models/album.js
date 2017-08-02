var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var song = require("./song.js");

let albumSchema = new Schema ({
	artistName: String,
	name: String,
	releaseDate: String,
	genres: [ String ],
	songs: [{
		name: String,
		trackNumber: Number
	}]
});

let Album = mongoose.model("Album", albumSchema);

module.exports = Album;