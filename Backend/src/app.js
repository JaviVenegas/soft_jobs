const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const errorMiddleware = require('./middlewares/errorMiddleware');

const APIRoutes = require('./routes/routes');

const app = express();

// Middleware para analizar JSON
app.use(express.json());

// Middleware de CORS
app.use(cors());

// Middleware de logging
app.use(morgan('dev'));

// Rutas
app.use('/api', APIRoutes);

// Middleware de manejo de errores
app.use(errorMiddleware);

module.exports = app;
