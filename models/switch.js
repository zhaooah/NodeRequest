var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ObjectId = mongoose.Schema.ObjectId;
var id = mongoose.Types.ObjectId();


var Switch = new Schema({
    id: ObjectId,
    timeRecord: { type: Date, default: Date.now },
    switchType: String
});


module.exports = mongoose.model('Switch', Switch);