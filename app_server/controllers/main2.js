/* GET homepage , al controler se le llama "index", que llama al vieww "index"*/
const request = require('request');
const apiOptions = {
    server:"http://localhost:5000"
  };
  if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://algoritmosdepoey.herokuapp.com';
  };
const requestOptions = {
    url: 'https://algoritmosdepoey.herokuapp.com/api/path',
    method: 'GET',
    json: {},  
  };
  request(requestOptions, (err, response, body) => {
    if (err) {
      console.log(err);
    } 
    else if (response.statusCode === 200) {
      console.log(body);
    } 
    else {
      console.log(response.statusCode);
    }
});
/*const inicial = (req, res) => {  
  const path = '/inicio'
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(
    requestOptions,
    (err, response, body) => {
      inicio(req, res, body);
      
    }
  );
};*/
const menu = (req, res) => {    
  const path = '/api' 
  console.log('llega a menu main2/app-server')
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(
    requestOptions,
    (err, response, body) => {
      console.log("pasa menu/main2/app_server" + body)
      inicio(req, res, body);
    }
  );
};
const inicio = (req, res, responsebody) => {  
  res.render('layout', {colecciones: responsebody});
};
const index = (req, res) => {
  const path = '/api/elementos/?patologia=' + req.query.patologia;
  console.log('llega a index main2/app-server')
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(
    requestOptions,
    (err, response, body) => {
      console.log("pasa index/main2/app_server")
      paginainicial(req, res, body);
    }
  );
};
const in_icio = (req, res, responsebody) => {
  res.render('layout', {colecciones: responsebody});
};
const paginainicial = (req, res, responsebody) => {
  res.render('index', {colecciones: responsebody});
};
//aqui se usa el req.query para pasar el objeto al app_api, con las propiedades papa y matricula
module.exports = {
index, menu
};