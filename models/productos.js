const mongoose= require ('mongoose');
const schema= mongoose.Schema;

const productoSchema= new schema({

    nombre: {type:String, unique:true, require:true},
    precio:{type: Number, require:true},
    stock: {type:Number, require:true},
    categoria:{type:String, require:true}
});

module.exports = mongoose.model("productos", productoSchema);