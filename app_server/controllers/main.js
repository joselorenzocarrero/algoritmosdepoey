/* GET homepage , al controler se le llama "index", que llama al vieww "index"*/
const request = require('request');
const apiOptions = {
    server:"http://localhost:5000"
  };
  if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://algoritmosdepoey.herokuapp.com';
  };
const requestOptions = {
    url: 'https://algortimosdepoey.herokuapp.com/api/path',
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
const paginainicial = (req, res, responsebody) => {
  res.render('index2', {colecciones: responsebody});
}
const paginasucesiva = (req, res, responsebody) => {
  res.render('paginasucesiva', {colecciones: responsebody});
}
const index = (req, res) => {  
  const path = '/api/poeys/?algoritmo=' + req.query.algoritmo
  console.log('llega a index main/app-server')
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(
    requestOptions,
    (err, response, body) => {
      console.log("pasa index/main/app_server")
      paginainicial(req, res, body);
    }
  );
};
//aqui se usa el req.query para pasar el objeto al app_api, con las propiedades papa y matricula
const pulsaviento = (req, res) => {
//  const prueba = req.query.matricula
//  const prueba2 = req.query.papa
//  console.log('app_server: ' + prueba)
  const path = '/api/vientos/?matricula=' + req.query.matricula + '&papa=' + req.query.papa
  console.log('llega a pulsaviento main/app-server');
  const requestOptions = {
    url: `${apiOptions.server}${path}`,
    method: 'GET',
    json: {},
  };
  request(
    requestOptions,
    (err, response, body) => {
      console.log("pasa pulsaviento/main/app_server")
      paginasucesiva(req, res, body);
    }
  );
};
module.exports = {
index, pulsaviento
};