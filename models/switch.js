var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.ObjectId;
var id = mongoose.Types.ObjectId();


var Switch = new Schema({
    _id: Number,
    on: { type: Date, default: Date.now },
    off: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Switch', Switch);