/*
    mongoose: permite realizar 
    la conexion entre la base de datos y Nodejs
*/
let mongoose = require('mongoose');

/*
    dotenv: permite crear variables de entorno
    para guardar de manera segura nuestras credenciales
*/
require('dotenv').config();

/* 
    la const url almacena la direecion de la base de datos,
    en èsta hacemos uso de las variables de entorno que 
    almacenan las credenciales
*/
let apiUrl = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.ggild.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

/* 
    hacemos uso de 'mongoose' y su propiedad 'connect()', 
    para realizar la conexion pasamos la url y configuramos los
    parametros a true, este retorna una promesa por lo que hacemos 
    uso de 'then()' y 'catch()' para conocer el estado de la conexion
*/
mongoose.connect(apiUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(res => console.log('db connect')).catch(err => console.log(err));

/* 
    exportacion del archivo connection
*/
module.exports = mongoose;