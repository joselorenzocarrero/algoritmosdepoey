var express = require('express');
var router = express.Router();
/* GET home page.Aqui se llama "ctrlMain" al modulo externo: el controler que tiene el método "index" */
const ctrlMain2 = require('../controllers/main2');
const ctrlMain = require('../controllers/main');
router.get('/',ctrlMain2.menu);
router.get('/elementos/',ctrlMain2.index);
router.get('/poeys/',ctrlMain.index);
router.get('/vientos/',ctrlMain.pulsaviento);
module.exports = router;
