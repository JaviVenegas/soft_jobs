
const {DB} = require ("../config/bd"); //contectar con Base de Datos 
const format = require ( 'pg-format'); //libreria de formatiar, para parametrizar las consultas 

const verificarCredenciales = async (email, password) => {
  try {
    const SQLQuery = format(
      `SELECT * FROM usuarios WHERE email = %L AND password = %L`,
      email,
      password
    );

    const { rowCount, rows } = await DB.query(SQLQuery);
    
    console.log('Resultado de la consulta:', rows);  // Agregar log aquí para ver el resultado

    if (!rowCount) throw new Error('USER_NOT_FOUND');
    return Boolean(rowCount);

  } catch (error) {
    console.error('Error en la consulta:', error);
    throw error;
  }
};


const obtenerUsuarioPorEmail = async (email) => {
  const result = await DB.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  return result.rows[0];
};

const crearUsuario  = async (email, password, rol, lenguage) => {
  const result = await DB.query(
    'INSERT INTO usuarios (email, password, rol, language) VALUES ($1, $2, $3, $4) RETURNING *',
    [email, password, rol, lenguage]
  );
  return result.rows[0];
};

  
module.exports = {verificarCredenciales, crearUsuario, obtenerUsuarioPorEmail }



