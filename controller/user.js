const User = require('../models/user')

async function handleGetAllUsers(req,res){

    const allUsers = await User.find({})
    return res.json(allUsers);
}


async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
   
    res.send(user)
}

async function handleDaleteUserById(req,res) {
    await User.findByIdAndDelete(req.params.id)
    return res.send("deleted successfully");
}

async function handlePostUser(req, res) {
    let body = req.body;
    
    if(!body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.jobTitle
    ){
        return res.status(400).json({msg : "All fields are required.."})
    }

    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        gender : body.gender,
        jobTitle : body.jobTitle
    })
    // console.log("result",result);

    return res.status(201).json({msg : `successfully inserted ${body.firstName} record`})
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleDaleteUserById,
    handlePostUser,
}