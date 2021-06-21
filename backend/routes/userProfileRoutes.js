const express = require('express');
const User = require('../models/userModel');
const protected = require('../middleware/authMiddleware');

const router = express.Router();


// GET request---user's profile
//----/api/user/profile
//---Private route
router.get("/profile",  protected, (req,res) =>{
    const currentUser = req.user._id; //get current user from authMiddleware after checking
    User.findById(currentUser)
    .then(user =>{
        res.status(200).json({
            _id:user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    })
    .catch(error =>{
        res.status(404).json({errorMessage:'Unable to find user'})
    })
}
);

module.exports = router;
