const express=require("express");
const createUser = require("../controller/createUser");
const getUser = require("../controller/getUser");

const router=express.Router();


router.post("/createUser",createUser);
router.get("/getallUser",getUser)
module.exports=router;