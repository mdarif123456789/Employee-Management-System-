const express=require("express");
const createUser = require("../controller/createUser");
const getUser = require("../controller/getUser");
const updateUser = require("../controller/updateUser");
const deleteUser = require("../controller/deleteUser");

const router=express.Router();


router.post("/createUser",createUser);
router.get("/getallUser",getUser);
// router.put("/updateUser/:id",updateUser);
router.delete("/deleteUser/:id",deleteUser);


// PUT /api/v1/updateUser/:id
router.put('/updateUser/:id', async (req, res) => {
    try {
      const { name, email, title, department, role } = req.body;
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { name, email, title, department, role },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully', data: updatedUser });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }
  });
module.exports=router;
