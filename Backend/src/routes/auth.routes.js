//este archivo es para definir los endpoints 

const {Router} = require ('express');   //exportando el router de express para ser usado. 
const router = Router();
const { autenticarUsuario} = require('../middlewares/validar');
const { handleLogin, handleRegistrar, handleObtenerUsuario } = require('../controllers/auth.controllers');



router.post('/login', handleLogin);   
router.post ('/usuario', handleRegistrar);
router.get ('/usuario', autenticarUsuario, handleObtenerUsuario);


module.exports = router; 