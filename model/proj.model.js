const mongoose=require("mongoose")

const assign_schema=mongoose.Schema({
    project:{
        type:String,
        required:[true,"Please add the task name"],
    },
    date:{
        type:Date,
        required:[true,"Please add the date to you task"],
    },
    start_time:{
    
        type:String,required:true
    }
    ,end_time:{
        type:String,required:true
    }
    ,time_spent:{
        type:String,required:true
    }
    ,description:{
        type:String,required:true
    }
},{timestamps:true});

module.exports=mongoose.model("Task",assign_schema);