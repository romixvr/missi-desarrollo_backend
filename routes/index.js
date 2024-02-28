const express = require('express');
const path = require('path');
const { send } = require('process');
const router =express.Router();

const filePath = path.resolve('views', 'about.html');
const filePathrp = path.resolve('views', 'registro.html');
const {createReadStream} = require('fs');
const HTML_CONTENT_TYPE = 'text/html'




router.get('/about',function(req,res){
  res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE });
  // leemos el fichero about.html y su contenido lo redirigimos a la respuesta
  createReadStream(filePath).pipe(res);

  });


  router.get('/registro',function(req,res){
    res.writeHead(200, { 'Content-Type': HTML_CONTENT_TYPE });
    // leemos el fichero about.html y su contenido lo redirigimos a la respuesta
    createReadStream(filePathrp).pipe(res);
  
    });

router.get('/', (req, res)=> {
    res.send('Index - Aquí va mi página de inicio del proyecto');
});





router.get ('/tienda',(req,res)=>{
    res.send('Tienda de e-commerce');
})
module.exports = router;
