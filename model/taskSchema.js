const mongoose = require('mongoose');
const moment = require('moment');

const taskSchema = mongoose.Schema({
    project:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    start_time: {
        type: String,
        required: true,
        validate: /^[0-9]{1,2}:[0-9]{2} [AP]M$/
    },
    end_time: {
        type: String,
        required: true,
        validate: /^[0-9]{1,2}:[0-9]{2} [AP]M$/
    },
    hours:{
        type:Number,
        required:true
    },
    minutes:{
        type:Number,
        required:true
    },
    total: {
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    }    
})




const projectData = new mongoose.model("Project Hours",taskSchema);

module.exports = projectData;