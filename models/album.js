var mongoose = require("mongoose");
var Schema = mongoose.Schema;

let albumSchema = new Schema ({
	artistName: String,
	name: String,
	releaseDate: String,
	genres: [ String ]
});

let Album = mongoose.model("Album", albumSchema);

module.exports = Album;