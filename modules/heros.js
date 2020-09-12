var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/node2",{useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex: true});
var conn = mongoose.Collection;

var herosSchema = new mongoose.Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

var HerosModel = mongoose.model('Heros', herosSchema);
module.exports = HerosModel;