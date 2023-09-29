const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    technologies:[{
        type:String,
        required:true
    }],
    frontend_skill:[String],
    backend_skill:[String],
    database_skill:[String],
    infrastructure_skill:[String],
    availablity:{
        type:String,
        required:true
    }


    })

module.exports = mongoose.model('Project', projectSchema);