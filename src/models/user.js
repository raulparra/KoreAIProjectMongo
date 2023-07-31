const mongoose = require('mongoose');


const UsersSchema = new mongoose.Schema({
    nombre: { type: String, require: true },
    correo: { type: String, require: true },
    telefono: { type: Number, require: true },
    usuario: { type: String, require: true },
    contrasenia: { type: String, require: true }
});

module.exports = mongoose.model('Usuarios', UsersSchema);