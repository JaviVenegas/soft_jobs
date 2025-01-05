
const jwt = require("jsonwebtoken");
require ('dotenv').config();


const {JWT_SECRET} = process.env

const signToken = (data) =>{
    return jwt.sign(
        data, 
        String(JWT_SECRET), 
        {
            algorithm: 'HS384',
            expiresIn: '24h'  
        })
}; 

const verifyToken = (token) => {
    return jwt.verify(token, String(process.env.JWT_SECRET));
};

const decodeToken = (token) => {
    return jwt.decode(token);
};


module.exports = {signToken, verifyToken, decodeToken}


