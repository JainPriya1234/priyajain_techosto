const createCustomError = require("../error/customAPTError");
const assign=require("../model/proj.model");

const getTask=async(req,res)=>{
   try{
    const tasks=await assign.find()
    res.status(200).json(tasks);
   }
   catch(err){
    res.json(createCustomError(err,400));
   }
};


const createTask=async(req,res)=>{
   try{
    console.log("The request body is ",req.body);
    const {project,date,start_time,end_time,time_spent,description}=req.body;
    if(!project||!date||!start_time||!end_time||!time_spent||!description){
        res.status(400);
        throw new Error("ALl feilds are mandatory");
    }
    const task=await assign.create({
        project,date,start_time,end_time,time_spent,description
    })
    
    res.status(201).json(task);
   }
   catch(err){
    res.json(createCustomError(err,400));
   }
};

const updateTask=async(req,res)=>{
   try{
    const task=await assign.findById(req.body.id);
    if(!task){
        res.status(404);
        throw new Error("Task not found")
    };
    
    const updateTask=await assign.findByIdAndUpdate(
        req.body.id,
        req.body,
        {new:true}
    )
    res.status(201).json(updateTask);
   }
   catch(err){
    res.json(createCustomError(err,400));
   }
}

const deleteTask=async(req,res)=>{
  try{
    const task=await assign.findById(req.body.id);
    if(!task){
     res.status(404);
     throw new Error("Task not found")
    }
    await assign.deleteOne();
    
    res.status(200).json(task)
 
  }
  catch(err){
    res.json(createCustomError(err,400));
  }
}

module.exports={getTask,updateTask,createTask,deleteTask}

