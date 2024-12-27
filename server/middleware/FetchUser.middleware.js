const Jwt = require('jsonwebtoken');
require('dotenv').config;

const AuthToken_Secrate = process.env.Secrate_key;

const fetchUser = (req,res,next)=>{

    //geting user data from authtoken
    try {
        let Token = req.header("AuthToken");
        if(!Token){
            return res.status(400).json({message:"please try with right creditials"});
        }

        const Data = Jwt.verify(Token, AuthToken_Secrate);
        req.user = Data.user;
        console.log(req.user.userid);
        next(); 
       
    } catch (error) {
    success = false;
    return res.status(500).json({message:"some internal error accured in getting user Data from Token"});
    }    


};

module.exports = fetchUser;