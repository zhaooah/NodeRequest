var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.ObjectId;
var id = mongoose.Types.ObjectId();


var Switch = new Schema({
    id: ObjectId,
    switchOn: { type: Date, default: Date.now },
    switchOff: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Switch', Switch);