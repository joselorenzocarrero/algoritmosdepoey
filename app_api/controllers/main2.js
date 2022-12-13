/* GET homepage , al controler se le llama "index", que llama al vieww "index"*/
const mongoose = require('mongoose');
const Vel = mongoose.model('Coleccion');
let matriz = [];
let matriz1 = [];
let patologia = [];
const menu = (req,res) => {
  console.log('llega a menu main2/app_api')
  matriz1[0] = matriz;
  matriz1[1] = [];
  if (matriz){ 
    console.log("matriz recibida en menu main2/app_api")  
    return res
      .status(200)
      .json(matriz1);        
  }
};
const index = (req, res) => { 
  Vel    
    .find({patologia:req.query.patologia})
    .exec((err, colecciones) => {
      if (colecciones){
        console.log('pasa index main2/app_api; ')
        matriz1[1]= colecciones
        console.log(JSON.stringify(matriz1[1]))        
        return res
         .status(200)
         .json(matriz1);
      }
      if (!colecciones) {
        return res
          .status(404)
          .json({
            "message": "no se encuentran los...."
          });
      } 
      else if (err) {
        return res
        .status(404)
        .json({
          "message": "no se que error es este...."
        });      
      }        
    });
};
const ini = (function() {  
  Vel          
    .distinct('familia')
    .exec((err, colecciones) => {
      if (colecciones){
        for(let i = 0, ii = colecciones.length; i<ii; i++){
          inic(colecciones,ii);          
        }
      matriz = matriz;
      }
    });
})();    
function inic(colecciones,ii) { 
  for(let i = 0; i<ii; i++){
    Vel
      .distinct('patologia',{familia:colecciones[i]})
      .exec((err, patologias) => {            
        if (patologias){
          let iv = patologias.length
          for(let iii = 0; iii<iv; iii++){
            patologia.push(patologias[iii]);            
          }
          matriz[i] = {familia: colecciones[i], patologia: patologia}
          patologia = [];                    
        }                       
      })
  }
};
module.exports = {
  index, menu, matriz1
}
/*const inicial =()=> {
  Vel
    .distinct('familia')
    .exec((err, colecciones) => {
      if (colecciones){ 
        for(let i = 0, ii = colecciones.length; i<ii; i++){
          inicial2(colecciones[i],i,ii);          
        }        
      }                    
    });
};*/
/*const pregunta= (req, res) => {
  Vel
    .find({familia})
    .exec((err,familias) => {
      console.log(JSON.parse(JSON.stringify(familias)))
      return res
        .json(familias)      
    });
}*/
