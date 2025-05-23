// Importa Express
const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const bodyParser = require('body-parser');

//Importar módulos locales
const db = require('./db/database');

// Crea una instancia de la aplicación
const app = express();

// Define un puerto
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(express.json());
app.use(dotenv.config());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Importa rutas de los controladores del api
const apiroutes = require('./Routes/api.routes');
app.use('/api', apiroutes);

// Ruta base de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API en blanco con Express!');
});

// Inicia el servidor
app.listen(PORT, () => {
  //inicia conexión con mongodb
  db();
  //indica que el servidor está online
  console.log(`Servidor corriendo en el puerto ${PORT}`);

});
