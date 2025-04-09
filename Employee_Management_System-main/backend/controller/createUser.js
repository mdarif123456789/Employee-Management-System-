const employee=require("../model/User")

async function createUser(req,res)
{
    try{
        const {name,email,title,department,role}=req.body;
        if(!name||!email || !title || !department || !role)
        {
            console.log("incorrect data");
            return res.status(400).json({
                status:400,
                msg:"please fill all feilds"
            });
        }
        const user=await employee.create({
            name,
            email,
            title,
            department,
            role,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`
        })

        return res.status(200).json({
            status:200,
            masg:"user created successfully",
            data:user
        })
    }
    catch(err)
    {
        console.log("error",err)
        return res.status(500).json({
            status:500,
            msg:err.message
        })
    }
}

module.exports=createUser;