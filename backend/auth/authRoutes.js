const express = require('express');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken');


const router = express.Router();

//User Login and token
//----POST--/api/auth/login
router.post('/login', (req,res) =>{
    const {email, password} = req.body;
    
    User.findOne({email:email})
    .then(user =>{
        if(user && bcrypt.compareSync(password, user.password)){ //compare stored password with bcrypt compared password
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
                token: generateToken(user._id)
            })
        }else{
            res.status(401).json({message: 'Invalid username or password'})
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Unable to login'})
        console.log(error)
    })
})

//Register New User
//----POST--/api/auth/register
router.post('/register', (req,res) =>{
    let {name,email, password} = req.body;
    const hash = bcrypt.hashSync(password, 10)
    password = hash
    
    User.findOne({email:email})
    .then(user =>{
        if(user){
            res.status(400).json({message:'User already exists'})
        }else{
            User.create({
                name,
                email,
                password
            })
            .then(newUser =>{
                console.log(newUser)
                if(newUser){
                res.status(201).json({
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                    isAdmin: newUser.isAdmin,
                    token:generateToken(newUser._id)})
                }else{
                    throw new Error('Invalid Data')
                }
            })
            .catch(error =>{
                console.log(error)
                res.status(500).json({errorMessage:'Unable to create new user'})
            })
        
        }
    })
    .catch(error =>{
        res.status(500).json({errorMessage:'Unable to register'})
        console.log(error)
    })
})


module.exports = router;