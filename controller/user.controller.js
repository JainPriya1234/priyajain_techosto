const assign=require("../model/user.model");

const getTask=async(req,res)=>{
    const tasks=await assign.find()
    res.status(200).json(tasks);
};


const createTask=async(req,res)=>{
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
};

const updateTask=async(req,res)=>{
    console.log("hi");
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

const deleteTask=async(req,res)=>{
    console.log("hi");
   const task=await assign.findById(req.body.id);
   if(!task){
    res.status(404);
    throw new Error("Task not found")
   }
   await assign.deleteOne();
   
   res.status(200).json(task)

}

module.exports={getTask,updateTask,createTask,deleteTask}

