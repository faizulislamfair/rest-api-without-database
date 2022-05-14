const users = require('../models/users.model')

const getAllUsers = (req, res)=>{
    res.status(200).json({ users });
};

const createUser = (req, res)=>{
    res.status(200).json({ message: "This is a post method" });
};

module.exports = { getAllUsers, createUser };