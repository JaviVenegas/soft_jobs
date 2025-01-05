//para almacenar congiguraciones y valores sensibles en este caso los datos del servidor 
require('dotenv').config();  //paquete envi 
const app = require('./src/app');
const PORT = process.env.PORT || 3000; //informando que se esta usando env 


//servdor a usar y que se importa desde env
app.listen(PORT, () => {
    console.log(`Server running on port:${PORT}`)
})