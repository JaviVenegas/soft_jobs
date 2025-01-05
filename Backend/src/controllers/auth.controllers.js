const { signToken } = require('../helpers/jwt');
const Auth = require ('../models/Auth')
const bcrypt = require('bcrypt');



//login 
const handleLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const usuarioValido = await Auth.verificarCredenciales(email, password);
        if (!usuarioValido) {
        return res.status().json({ error: 'Credenciales incorrectas' });  //error si no existen gredenciales 
        }

        const data = {   //aqui se indica la info que se devuelve al usuario
        email,
        };

      // Generar el token JWT
        const token = signToken(data);
  
      // Enviar el token como respuesta
        res.json({ token });
  
    } catch (error) { // Pasar el error al middleware de manejo de errores
    next(error);
    }
  };


// Registrar nuevo usuario 


  const handleRegistrar = async (req, res) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Auth.crearUsuario(email, hashedPassword, rol, lenguage);
        res.status(201).json({ message: 'Usuario registrado', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar usuario' });  //aqui dejo el error con status, prodando distintas formas
    }
}




//obtener usuario por mail 
const handleObtenerUsuario = async (req, res) => {
  try {
      const { email } = req.user;
      const user = await Auth.obtenerUsuarioPorEmail(email);
      res.json(user);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener usuario con mail' });
  }
};


module.exports = {handleLogin, handleRegistrar, handleObtenerUsuario}