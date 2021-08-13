/* 
    requerimiento de 'express' a 'express()'
    'port' almacena la configuracion del puerto
*/
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

/* 
    requerimiento de los archivos.js donde 
    definimos la logica para las metodos/rutas
*/
let methods = require('./routes/methods');

/*
    requerimiento de los modulos 'morgan' y 'cors' 
*/
let morgan = require('morgan'),
    cors = require('cors');

/*
    uso de los middlewares 'json()', 'urlencoded()'
    'morgan()', 'cors()'
*/
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* 
    uso y acceso de las rutas al servidor local
*/
app.use('/api', methods);

/* 
    configuracion del servidor
*/
app.listen(port, (err) => {
    (err) ? console.log(err):console.log('server running') ;
});