const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protected = (req, res, next) =>{
    let token = req.headers.authorization;


    if(token && token.startsWith('Bearer')){
        token = token.split(' ')[1]   //taking the Bearer out of the token

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
            if(err){
                res.status(401).json({message:'Not authorized, token failed'})
            }else{ 
                // console.log(decoded)
                User.findById(decoded.id).select('-password') //return user info except password
                .then(user =>{
                    // res.status(200).json(user)
                    req.user = user;
                next();

                })
                .catch(error =>{
                    res.status(401)
                    console.log(error)
                    throw new Error('Not authorized, token failed')
                })

            }
        })
    }
    if(!token){
        res.status(401)
        throw new Error('Unathorized, no token found')
    }

}

module.exports = protected;

