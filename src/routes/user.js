const express = require('express');
const UsersSchema = require('../models/user');
const router = express.Router();


//Obtener todos los usuarios
router.get('/usuarios', ( req, res) => {
    UsersSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});

//Crear usuario
router.post('/usuarios', ( req, res )=>{
    const usuario = UsersSchema(req.body);
    usuario.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )    
});

module.exports = router;