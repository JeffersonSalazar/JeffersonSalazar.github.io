/* 
    requerimiento del archivo 'connect'
*/
let connect = require('./connect');

/*
    requerimos model y Schema del modulo mongoose
    que nos permiten crear el esquema de la colleccion
*/
let { model, Schema } = require('mongoose');

/* 
    a continuacion en una "const" almacenamos un nuevo esquema que 
    contiene dentro de su scope los mismos parametros definidos en la 
    base de datos, ademas hacemos uso de dos propiedades.
    'timestamps': para conocer la fecha de creacion
    'versionKey': para remover la version
*/
const COLLECTION = new Schema ({
    name:   { type: String, require: true },
    email:  { type: String, require: true },
    post:   { type: String, require: true }
}, { timestamps: true, versionKey: false });

/* 
    exportacion del archivo model
*/
module.exports = model('contactos', COLLECTION);