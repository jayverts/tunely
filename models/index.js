var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

var Album = require("./Album");
module.exports.Album = Album;