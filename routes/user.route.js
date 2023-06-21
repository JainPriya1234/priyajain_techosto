const express=require("express")
const router=express.Router();
const {getTask,updateTask,createTask,deleteTask}=require("../controller/proj.controller")

router.post('/create',createTask);
router.get('/get',getTask);
router.put('/updated',updateTask);
router.delete('/deleted',deleteTask);
module.exports=router;
