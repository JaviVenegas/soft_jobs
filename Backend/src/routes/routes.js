
//este archivo es para definir los endpoints 

const express = require ('express');  //exportando el router de express para ser usado. 

const authRoutes = require ('./auth.routes');


const app = express();

app.use ('/auth', authRoutes);

module.exports = app; 
