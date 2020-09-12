var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/node2",{useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex: true});
var conn = mongoose.Collection;

var employeeSchema = new mongoose.Schema({
    name :{
        type: String
    },
    email : {
        type: String
    },
    gender : {
        type: String
    },
    phone : {
        type: Number
    }
});

var EmployeeModel = mongoose.model('Employee', employeeSchema);
module.exports = EmployeeModel;