const express=require("express");
const mongoose = require('mongoose'); 
mongoose.set('strictQuery', false);
const app=express();
const notFound = require("./error/notfound");
const errorHandler = require("./error/customAPTError");
const dotenv = require("dotenv");
dotenv.config();
const connection=async()=>{
    try{
        const connect=await mongoose.connect(process.env.DB)
        console.log("Databse connected ")
    }catch(err){
        console.log(err);
    }
}
connection();

app.use(express.json());

const PORT=3000;

app.use(require("./routes/user.route"))

 app.use(notFound);
app.use(errorHandler);

app.listen(PORT,(req,res)=>{
    console.log(`Port is listening on ${PORT}`)
})
