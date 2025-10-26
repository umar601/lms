const mongoose = require("mongoose");
const mongooselocal = require("passport-local-mongoose")

const studentSchema = new mongoose.Schema({

    email:{
        type:String
    },
    course:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"course"
        }
    ],
    phoneNumber:{
        type:Number
    }


})


studentSchema.plugin(mongooselocal);


module.exports = mongoose.model("student",studentSchema);

