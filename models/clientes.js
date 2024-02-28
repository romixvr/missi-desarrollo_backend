const mongoose = require('mongoose');
const schema= mongoose.schema;

const clientes=new schema({

    nombre:{type:String, unique, require},
    correo:{type:String, unique, require},
    direccion:{type:String, require}
});
