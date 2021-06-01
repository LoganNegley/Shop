const express = require('express');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const router = express.Router();

//User Login and token
//----POST--/api/auth/login
router.post('/login', (req,res) =>{
    const {email, password} = req.body;
    
    User.findOne({email:email})
    .then(user =>{
        if(user && bcrypt.compareSync(password, user.password)){
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token: null
            })
        }else{
            res.status(401).json({message: 'Invalid username or password'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Unable to find user'})
    })


})


module.exports = router;