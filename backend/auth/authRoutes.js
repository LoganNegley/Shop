const express = require('express');
const User = require('../models/userModel');


const router = express.Router();

//User Login and token
//----POST--/api/auth/login
router.post('/login', (req,res) =>{
    const {email, password} = req.body;
    
    User.findOne({email:email})
    .then(user =>{
        
        console.log(user)
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Unable to find user'})
    })


})


module.exports = router;