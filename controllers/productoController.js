
// cargamos mongoose para gestionar nuestra BD
const { default: mongoose } = require('mongoose');
// Cargamos el modelo para usarlo posteriormente
const Producto = require('../models/productos');

//mostrar

module.exports.mostrar = async (req, res) => {
    try {
        const productos = await Producto.find({});
        //console.log(productos);
        //res.json(productos);
        res.render('productos',{productos:productos});
    } catch (error) {
        console.error('Error mostrando los productos:', error);
        res.status(500).json({
            message: 'Error mostrando los productos'
        });
    }
};


const { validationResult } = require('express-validator');

module.exports.crear = async (req, res) => {
    // Validar datos de entrada
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Crear nuevo producto
        const producto = new Producto({
            nombre: req.body.nombre,
            precio: req.body.precio,
            stock: req.body.stock,
            categoria: req.body.categoria
        });

        // Guardar producto en la base de datos
        await producto.save();

        // Redirigir al usuario a la página de productos
        res.redirect('/verproductos');
    } catch (error) {
        // Manejar errores
        console.error(error.message);
        return res.status(500).json({
            message: 'Error al registrar el producto'
        });
    }
};

module.exports.borrar = async (req, res) => {
    const id = req.params.id;

    try {
        const producto = await Producto.findByIdAndDelete(id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.redirect('/verproductos');
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: 'Error al eliminar el producto' });
    }
};





