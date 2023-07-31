const express = require('express');
const ProductSchema = require('../models/products');

const router = express.Router();

//Crear un producto
router.post('/producto', ( req, res )=>{
    const producto = ProductSchema(req.body);
    producto.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});

//Obtener todos  los productos
router.get('/producto', ( req, res )=>{
    ProductSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});

//Obtener un producto
router.get('/producto/:id', ( req, res )=>{
    const { id } = req.params;
    ProductSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});

//Actualizar un producto
router.put('/producto/:id', ( req, res )=>{
    const { id } = req.params;
    const { nombre, descripcion, precio, imagenes, categoria, propiedades } = req.body;
    ProductSchema
    .updateOne( {_id: id },{$set : { nombre, descripcion, precio, imagenes, categoria, propiedades }})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});

//Eliminar producto
router.delete('/producto/:id', ( req, res )=>{
    const { id } = req.params;
   
    ProductSchema
    .deleteOne({_id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}) )
});

module.exports = router;