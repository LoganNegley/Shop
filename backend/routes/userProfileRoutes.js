const express = require('express');
const User = require('../models/userModel');
const protected = require('../middleware/authMiddleware');

const router = express.Router();


// GET request---user's profile
//----/api/user/profile
//---Private route
router.get("/profile",  protected, (req,res) =>{
    // User.findById({email:email})
    // .then(user =>{
    //     res.status(200).json(user);
    // })
    // .catch(error =>{
    //     res.status(500).json({errorMessage:'Unable to find user'})
    // })
    res.send('SUCCESS!!')
}
);

module.exports = router;
