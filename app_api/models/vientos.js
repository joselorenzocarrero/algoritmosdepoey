const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const vientosSchema = new mongoose.Schema({ 
  matricula:Number, algoritmo:Number, papa:Number, elemento:String, color:String, nota:[String]
});
mongoose.model('Poey', vientosSchema, 'poeys');
const velasSchema = new mongoose.Schema({ 
  numero:Number, familia:String, patologia:String, algoritmo:String, nota:[String], color:String
});
mongoose.model('Coleccion', velasSchema, 'colecciones')

