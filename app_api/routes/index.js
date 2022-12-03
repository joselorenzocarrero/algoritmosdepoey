const express = require('express');
const router = express.Router();
/* GET home page.Aqui se llama "ctrlMain" al modulo externo: el controler que tiene el método "index" */
const ctrlMain2 = require('../controllers/main2');
const ctrlMain = require('../controllers/main');
router
  .route('/')
  .get(ctrlMain2.menu);
router
  .route('/elementos/')
  .get(ctrlMain2.index);
router
  .route('/poeys/')
  .get(ctrlMain.index)  
router
  .route('/vientos/')
  .get(ctrlMain.pulsaviento)
module.exports = router;
