const express=require('express');
const app=express();
const cors=require("cors");
const dbconnect = require('./config/databse');
// const employee = require('./model/User');
const userRoutes=require("./routes/user")


app.use(cors())
app.use(express.json());
app.use("/api/v1",userRoutes);



app.listen(3000,function(){
    console.log("server started at port 3000")
})

dbconnect();