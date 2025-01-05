const { verificarToken } = require('../helpers/jwt');

const autenticarUsuario = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 
    if (!token) {
        return res.status(401).json({ error: 'No se proporcionó un token' });
    }

    try {
        const decoded = verificarToken (token); 
        req.user = decoded; 
        next(); 
    } catch (error) {
        console.error('Error al verificar el token:', error);
        res.status(401).json({ error: 'Token inválido' });
    }
};

module.exports = { autenticarUsuario };
