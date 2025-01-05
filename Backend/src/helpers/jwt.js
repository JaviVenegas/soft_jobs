
const jwt = require("jsonwebtoken");
require ('dotenv').config();




const {JWT_SECRET} = process.env
//codigo para crear firmar token 
const signToken = (data) =>{
    return jwt.sign(
        data, 
        String(JWT_SECRET), 
        {
            algorithm: 'HS384',
            expiresIn: '24h'  
        })
}; 


//codigo para verificar token

const verificarToken = (token) => {
    return jwt.verify(token, String(JWT_SECRET));  
};





module.exports = {signToken, verificarToken} 


