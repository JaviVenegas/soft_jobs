const { signToken } = require('../helpers/jwt');
const Auth = require ('../models/Auth')



//login 


const handleLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

      // Verificar credenciales
        const usuarioValido = await Auth.verificarCredenciales(email, password);
        if (!usuarioValido) {
        return res.status().json({ error: 'Credenciales incorrectas' });
        }

        const data = {   //aqui se indica la info se devuelve al usuario
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


  const handleRegistrar = async (req, res) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Auth.crearUsuario(email, hashedPassword, rol, lenguage);
        res.status(201).json({ message: 'Usuario registrado', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
}

const handleObtenerUsuario = async (req, res) => {
  try {
      const { email } = req.user;
      const user = await Auth.obtenerUsuarioPorEmail(email);
      res.json(user);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener usuario' });
  }
};


module.exports = {handleLogin, handleRegistrar, handleObtenerUsuario }