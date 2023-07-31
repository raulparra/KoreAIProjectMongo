
const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    descripcion: { type: String },
    precio: { type: Number, require: true },
    imagenes:  [{type: String}],
    categoria: {type: String, require: true},
    propiedades: {type:Object},
});

module.exports = mongoose.model('Producto', ProductSchema);