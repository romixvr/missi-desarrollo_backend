'use strict'

const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

router.get('/verproductos', async (req, res) => {
  await productoController.mostrar(req, res);
});


router.post('/crear', (req,res)=> {
  productoController.crear(req,res);
})

router.get('/borrar/:id', (req,res)=> {
  productoController.borrar(req,res);
})
module.exports = router;

