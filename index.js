'use strict'

const express = require ('express');
const path = require ('path');
//const filePath = path.resolve(__dirname, 'about.html');
const methodOverride=require('method-override');
const session= require('express-session');
var bodyParser = require('body-parser');
//const prod = require('./routes/productos');
var productRouter = require('./routes/productos');



// inicializaciones
const app = express();
require('./database');

// setting

app.set('port',3000);
app.set('views',path.join(__dirname,'views')); // segunda parte


app.set('view engine', 'ejs');


//app.use(express.static(path.join(__dirname, 'views')));




// middleware
//app.use('./routes/producto', productRouter);
app.use(express.urlencoded({extended:true})); //permite la captura de datos sin imagenes
app.use (methodOverride('_method'));
app.use (session({
    secret:'mysecretapp',
    resave: true,
    saveUninitialized:true
}));

app.use(express.static('public'));
//variables globales

// routes
app.use(require('./routes/productos'));



//app.use(require('./routes/productos'));
//app.use(require('./routes/clientes'));




//static files

// server activo
app.listen(app.get('port'), ()=> {
    console.log('Servidor activo en el puerto:', app.get('port'));
})


module.exports=app;