const mongoose=require("mongoose");
require("dotenv").config()

async function dbconnect()
{
    try{
        const con = await mongoose.connect('mongodb+srv://arif8340719797:q6JmPLjMHBdIIqJk@cluster0.lw3fwkm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

        if(con)
        {
            console.log("DB connection successfull")
        }
    }
    catch(err){
        console.log("connection issue");
        console.error(err.message);
        process.exit(1);
    }
};

module.exports=dbconnect;

