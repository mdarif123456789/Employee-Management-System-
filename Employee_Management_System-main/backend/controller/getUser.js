const express=require("express");
const employee = require("../model/User");

async function getUser(req,res){
    try{
        const userData=await employee.find({});
        if(!userData){
            return res.status(400).json({
                status:400,
                msg:"something bad happened"
            })
        }

        return res.json({
            data:userData
        })
    }
    catch(err)
    {
        return res.status(500).json({
            msg:err.message
        })
    }
}

module.exports=getUser;