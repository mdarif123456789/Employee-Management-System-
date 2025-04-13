const employee = require("../model/User");

async function deleteUser(req, res) {
    try {
        const { id } = req.params.id;

        const deletedUser = await employee.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                status: 404,
                msg: "User not found"
            });
        }

        return res.status(200).json({
            status: 200,
            msg: "User deleted successfully",
            data: deletedUser
        });
    } catch (err) {
        console.log("Error", err);
        return res.status(500).json({
            status: 500,
            msg: err.message
        });
    }
}

module.exports = deleteUser;
