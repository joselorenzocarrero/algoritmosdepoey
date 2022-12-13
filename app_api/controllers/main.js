/* GET homepage , al controler se le llama "index", que llama al vieww "index"*/
const {matriz1} = require('./main2');
console.log(matriz1);
const mongoose = require('mongoose');
const Poe = mongoose.model('Poey');
let matrices = {dni:[], resultado:[]}; 
//matrices.dni.push('0');
const index = (req, res) => {
  //const familia = req.query.familia
  //const el = req.query.elemento
  matrices = {dni:[], resultado:[]}//declaracion global de la matriz vuelve a vaciarse cuando se empieza
  Poe    
    .find({papa:0,algoritmo:req.query.algoritmo})
    .exec((err, vientos) => {
      if (vientos){ 
        console.log("pasa vientos en index/main/app_api")       
        matriz1[1] = vientos;
        //matrices.resultado = matriz1[1];
        console.log(JSON.stringify(matriz1));
        return res
         .status(200)
         .json(matriz1);
      }
      if (!vientos) {
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
const pulsaviento = (req, res) => {
  const pa = (req.query.papa);
  const ma = (req.query.matricula);
//  console.log('app_api' + pa + '/' + req.query.papa )      
  Poe
   //.findById(req.params.id)
    .find({papa:req.query.matricula})
    .exec((err, vientos) => {  
      if (vientos.length > 0){              
        console.log ("pasa pulsaviento en main/app_api:" + vientos.length + vientos);
        matriz1[1] = vientos;        
        /*matrices.dni.push(req.query.matricula);        
        for (let i = matrices.resultado.length - 1; i > 0; i--){
          if(matrices.resultado[i].papa>pa) {
            matrices.resultado.splice(i,1);
          }         
        } 
        for (let i = matrices.resultado.length - 1; i > -1; i--){
          if(matrices.resultado[i].papa == pa){
            matrices.resultado[i].color = "black";  
          }
          if(matrices.resultado[i].matricula == ma){
            matrices.resultado[i].color = "red";            
          }           
        }      
        matrices.resultado = matrices.resultado.concat(matriz1[1]);              
        matriz1[1] = matrices.resultado;*/ 
        //console.log('ahora matriz1 es..' + matriz1); 
        return res
         .status(200)
         .json(matriz1);
      }; 
      if (vientos.length == 0){ 
        Poe
          .find({matricula:req.query.matricula})
          .exec((err, vientos) => {
          console.log ("pasa la nueva matriz de la matricula:");
          matriz1[1] = vientos; 
          return res
           .status(200)
           .json(matriz1);             
        }) 
      }
      if (!vientos) {
        return res
          .status(404)
          .json({
            "message": "no se encuentra...."
          });
      } 
      else if (err) {
        return res
          .status(404)
          .json(err);
      }      
    });    
};
module.exports = {
index, pulsaviento
};