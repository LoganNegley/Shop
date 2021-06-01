const express = require('express');
const User = require('../models/userModel');

const router = express.Router();


// GET request---all users
//----/api/user/
router.get("/", (req,res) =>{
    User.find({})
    .then(users =>{
        res.status(200).json(users);
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Unable to get users'})
    })
}
);

// GET request---user by Id
//----/api/user/:id
router.get("/:id", (req,res) =>{
    const {id} = req.param;

    User.findById(id)
    .then(user =>{
        console.log(user)
        res.status(200).json(user)
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Error getting user by ID'})
    })
})

module.exports = router;
