const employee= require('../model/User');

async function updateUser(req, res)
{
    try{
        const {id}=req.params;
        const {name, email,title, department, role}= req.body;
        if(!name|| !email|| !title || !department || role){
            console.log("Incomplete data for update");
            return res.status(400).json({
                status:400,
                msg:"please fill all fields"
            });
        }
        const updatedUser= await employee.findByIdAndUpdate(id, {name, email, title, department, role
        },{
            new:true
        }
        ); 
        if (!updatedUser) {
            return res.status(404).json({
                status: 404,
                msg: "User not found"
            });
        }

        return res.status(200).json({
            status: 200,
            msg: "User updated successfully",
            data: updatedUser
        });

    }
    catch(error)
    {
        console.log("Error", err);
        return res.status(500).json({
            status: 500,
            msg: err.message
        });
    }
}
module.exports=updateUser;